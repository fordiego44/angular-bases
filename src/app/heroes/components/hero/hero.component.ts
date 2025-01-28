import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre: string = "ironman";
  public edad: number = 45;

  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescripcion(): string{
    return `${this.nombre} - ${this.edad}`;
  }

  changeHero(): void{
    this.nombre = 'Diego';
  }

  changeAge(): void{
    this.edad = 27;
  }

  resetForm(): void{
   this.edad = 45;
   this.nombre = 'ironman'
  }
}
