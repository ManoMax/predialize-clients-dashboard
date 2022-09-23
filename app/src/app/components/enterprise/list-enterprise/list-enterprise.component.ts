import { Component, Input, OnInit } from '@angular/core';
import { EnterpriseService } from '../../../services/enterprise.service';
import { Enterprise } from '../../../pages/enterprise/enterprise.model';

@Component({
  selector: 'app-list-enterprise',
  templateUrl: './list-enterprise.component.html',
  styleUrls: ['./list-enterprise.component.scss']
})
export class ListEnterpriseComponent implements OnInit {
  
  @Input()
  enterprises: any;
  
  @Input()
  name: string;
  
  constructor() { }
  
  ngOnInit() : void {
    
  }
}
