
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-tab2', 
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true, 
  imports: [IonicModule, CommonModule, RouterModule] 
})
export class Tab2Page implements OnInit {
  favoritePokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.favorites$.subscribe(favorites => {
      this.favoritePokemons = favorites;
      console.log('Pokémons favoritos carregados na Tab2:', this.favoritePokemons); 
    });
  }

  removeFavorite(pokemon: Pokemon) {
    this.pokemonService.toggleFavorite(pokemon);
  }
}