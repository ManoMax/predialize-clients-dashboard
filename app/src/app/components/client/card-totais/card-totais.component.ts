import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-totais',
  templateUrl: './card-totais.component.html',
  styleUrls: ['./card-totais.component.scss']
})
export class CardTotaisComponent implements OnInit {

  @Input()
  totais?: any;

  @Input()
  list_client_view: boolean;

  constructor() { }

  ngOnInit() {
  }

}
