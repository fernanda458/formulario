import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  poderes = [ 'Volar', 'Fuerza','Invisibilidad', 'Lanzar Rayos', 'Magia'];

  heroe = new Heroe(0,'Ejemplo-Man', this.poderes[0], 'Juan N');

  enviado= false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.enviado=true;
  }
  newHeroe(){
    this.heroe =new Heroe (99, '','');

  }

}
