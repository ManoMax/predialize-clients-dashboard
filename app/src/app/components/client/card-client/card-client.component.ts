import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/pages/client/client.model';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent implements OnInit {

  @Input()
  client?: Client;

  constructor() { }

  ngOnInit() {
  }

}
