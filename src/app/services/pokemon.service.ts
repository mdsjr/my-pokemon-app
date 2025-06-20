import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs'; 
import { map, switchMap } from 'rxjs/operators';
import { Pokemon, PokemonListResponse, PokemonResult } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  
  private _favorites: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  public readonly favorites$: Observable<Pokemon[]> = this._favorites.asObservable(); 

  constructor(private http: HttpClient) {
    this.loadFavorites(); 
  }

  
  private loadFavorites() {
    const storedFavorites = localStorage.getItem('pokemonFavorites');
    if (storedFavorites) {
      this._favorites.next(JSON.parse(storedFavorites));
    }
  }

  
  private saveFavorites() {
    localStorage.setItem('pokemonFavorites', JSON.stringify(this._favorites.getValue()));
  }


  isFavorite(pokemonId: number): boolean {
    return this._favorites.getValue().some(p => p.id === pokemonId);
  }

 
  toggleFavorite(pokemon: Pokemon) {
    const currentFavorites = this._favorites.getValue();
    const index = currentFavorites.findIndex(p => p.id === pokemon.id);

    if (index > -1) {
      
      currentFavorites.splice(index, 1);
    } else {
      
      currentFavorites.push({ ...pokemon });
    }
    this._favorites.next(currentFavorites); 
    this.saveFavorites(); 
  }

 
  getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.baseUrl}/pokemon/?limit=${limit}&offset=${offset}`);
  }

  
  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

<<<<<<< HEAD
 
=======
  
>>>>>>> e910126 (feat::sparkles:Implementa a tela de detalhes do Pokémon e navegação da lista)
  getPokemonsWithDetails(limit: number, offset: number): Observable<Pokemon[]> {
    return this.getPokemonList(limit, offset).pipe(
      switchMap(response => {
        const pokemonDetailRequests: Observable<Pokemon>[] = response.results.map(pokemonResult =>
          this.getPokemonDetails(pokemonResult.url)
        );
        return forkJoin(pokemonDetailRequests);
      })
    );
  }
}