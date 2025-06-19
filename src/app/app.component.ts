// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; 
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, IonicModule], 
 
})
export class AppComponent {
  constructor() {}
}