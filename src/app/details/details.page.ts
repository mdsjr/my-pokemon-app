import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DetailsPage implements OnInit {
  pokemonId: string | null = null;
  pokemon: Pokemon | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.pokemonId) {
      
      const pokemonUrl = `${this.pokemonService['baseUrl']}/pokemon/${this.pokemonId}/`;
      

      this.pokemonService.getPokemonDetails(pokemonUrl).subscribe({
        next: (data) => {
          this.pokemon = data;
          console.log('Detalhes do Pokémon carregados:', this.pokemon);
        },
        error: (error) => {
          console.error('Erro ao carregar detalhes do Pokémon:', error);
        }
      });
    }
  }
}