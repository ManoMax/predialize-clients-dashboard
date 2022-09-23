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
  
  name: string = ''
  
  constructor(private enterpriseService : EnterpriseService) { }
  
  ngOnInit() : void {
    this.enterpriseService.getAll().subscribe(enterprises => {
      this.enterprises = enterprises;
    })
  }
  
  keyPress = (event) => {
    if (event.target.value !== '') {
      this.name = event.target.value;
      this.enterpriseService.getByName(this.name).subscribe(enterprises => {
        this.enterprises = enterprises;
      })
    } else {
      this.enterpriseService.getAll().subscribe(enterprises => {
        this.enterprises = enterprises;
      })
    }
  }


}
