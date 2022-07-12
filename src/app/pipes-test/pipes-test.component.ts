import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  titolo: string = 'utilizzare i pipes';
  testo: string = 'Angular';
  data: Date = new Date();

  oggettoJson: object = {
    nome: 'mark',
    eta: '19',
    indirizzo: {
      via: 'via tolstoi 5', cap: '00144'
    }
  };

  numero: number = 32244.544;

  percentuale: number = 0.30;

  giorni: string[] = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];

  constructor() { }

  ngOnInit(): void {
  }

}
