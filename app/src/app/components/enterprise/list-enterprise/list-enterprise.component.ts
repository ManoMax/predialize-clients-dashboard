import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../../../services/enterprise.service';
import { Enterprise } from '../../../pages/enterprise/enterprise.model';

@Component({
  selector: 'app-list-enterprise',
  templateUrl: './list-enterprise.component.html',
  styleUrls: ['./list-enterprise.component.scss']
})
export class ListEnterpriseComponent implements OnInit {

  enterprises: any = [];

  constructor(private enterpriseService : EnterpriseService) { }

  ngOnInit() : void {
    this.enterpriseService.getAll().subscribe(enterprises => {
      this.enterprises = enterprises;
      console.log(this.enterprises)
    })
  }

}
