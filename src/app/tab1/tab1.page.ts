import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { PokemonService } from '../services/pokemon.service'; 
import { Pokemon } from '../models/pokemon.model'; 
import { ExploreContainerComponent } from '../explore-container/explore-container.component'; 
import { Observable, forkJoin } from 'rxjs'; 
import { switchMap } from 'rxjs/operators'; 
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
>>>>>>> e910126 (feat::sparkles:Implementa a tela de detalhes do Pokémon e navegação da lista)
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonicModule, CommonModule, ExploreContainerComponent] 
=======
  imports: [IonicModule, CommonModule, RouterModule] 
>>>>>>> e910126 (feat::sparkles:Implementa a tela de detalhes do Pokémon e navegação da lista)
})
export class Tab1Page implements OnInit {
  pokemons: Pokemon[] = [];
  currentPage = 0; 
  itemsPerPage = 20; 
  totalPokemons = 0; 
<<<<<<< HEAD
=======

>>>>>>> e910126 (feat::sparkles:Implementa a tela de detalhes do Pokémon e navegação da lista)
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    const offset = this.currentPage * this.itemsPerPage;
    this.pokemonService.getPokemonList(this.itemsPerPage, offset).pipe(
      
      switchMap(response => {
        this.totalPokemons = response.count; 
        const pokemonDetailRequests: Observable<Pokemon>[] = response.results.map(pokemonResult =>
          this.pokemonService.getPokemonDetails(pokemonResult.url)
        );
        return forkJoin(pokemonDetailRequests);
      })
    ).subscribe({
      next: (pokemons) => {
        this.pokemons = pokemons;
        console.log('Pokémons carregados:', this.pokemons); // Para debug
      },
      error: (error) => {
        console.error('Erro ao carregar Pokémons:', error);
      }
    });
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.totalPokemons) {
      this.currentPage++;
      this.loadPokemons();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadPokemons();
    }
  }
}