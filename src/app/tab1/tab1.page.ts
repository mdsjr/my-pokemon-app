// src/app/tab1/tab1.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Módulo do Ionic
import { PokemonService } from '../services/pokemon.service'; // Importe seu serviço
import { Pokemon } from '../models/pokemon.model'; // Importe seu modelo
import { ExploreContainerComponent } from '../explore-container/explore-container.component'; // Se ainda existir, remova se não for usar
import { Observable, forkJoin } from 'rxjs'; // Importa Observable e forkJoin
import { switchMap } from 'rxjs/operators'; // Importa switchMap
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ExploreContainerComponent] // Remova ExploreContainerComponent se for remover o HTML dele
})
export class Tab1Page implements OnInit {
  pokemons: Pokemon[] = [];
  currentPage = 0; // Inicia na página 0 para o offset
  itemsPerPage = 20; // Quantos Pokémons por página
  totalPokemons = 0; // Para guardar o total de Pokémons da API (usado na paginação)

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    const offset = this.currentPage * this.itemsPerPage;
    this.pokemonService.getPokemonList(this.itemsPerPage, offset).pipe(
      // Pega a lista, depois pega os detalhes de cada um
      switchMap(response => {
        this.totalPokemons = response.count; // Guarda o total para controle de paginação
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