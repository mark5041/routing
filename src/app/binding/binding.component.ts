import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  titolo: string = "Esempio binding";

  trimestre: string[] = ['Gennaio', 'Febbraio', 'Marzo'];

  @Input() visibile!: string;

  funzioneCambioMese(event:any) {
    alert("Il mese è cambiato");
    console.log(event);
  }

  funzioneAlClick(event:any) {
    alert("Il bottone è stato premuto");
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
