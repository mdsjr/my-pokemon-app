import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon, PokemonListResponse, PokemonResult } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root' 
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  /**
   * Obtém uma lista paginada de Pokémons.
   * @param limit O número de Pokémons por página.
   * @param offset O índice inicial para a lista.
   */
  getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon/?limit=${limit}&offset=${offset}`);
  }

  /**
   * Obtém os detalhes de um Pokémon específico.
   * @param url A URL completa para os detalhes do Pokémon (obtida da lista).
   */
  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  /**
   * Obtém a lista de Pokémons e, em seguida, os detalhes de cada um deles.
   * Isso é necessário porque a lista inicial não contém as imagens.
   * @param limit O número de Pokémons por página.
   * @param offset O índice inicial para a lista.
   */
  getPokemonsWithDetails(limit: number, offset: number): Observable<Pokemon[]> {
    return this.getPokemonList(limit, offset).pipe(
      switchMap(response => {
        const pokemonDetailRequests: Observable<Pokemon>[] = response.results.map(pokemon =>
          this.getPokemonDetails(pokemon.url)
        );
        
        return forkJoin(pokemonDetailRequests);
      })
    );
  }
}