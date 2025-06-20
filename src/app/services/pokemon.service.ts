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

 
  getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon/?limit=${limit}&offset=${offset}`);
  }

  
  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

 
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