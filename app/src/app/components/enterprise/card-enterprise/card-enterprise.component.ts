import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-enterprise',
  templateUrl: './card-enterprise.component.html',
  styleUrls: ['./card-enterprise.component.scss']
})
export class CardEnterpriseComponent implements OnInit {

  @Input()
  data?: any;

  constructor() { }

  ngOnInit() {
  }

}
