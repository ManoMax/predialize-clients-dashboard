import { Component, OnInit } from "@angular/core";
import { EnterpriseService } from "src/app/services/enterprise.service";

@Component({
  selector: "app-enterprise",
  templateUrl: "./enterprise.component.html",
  styleUrls: ["./enterprise.component.scss"],
})
export class EnterpriseComponent implements OnInit {
  
  enterprises: any = [];
  name: string = ''

  constructor(private enterpriseService : EnterpriseService) {}

  ngOnInit(): void {
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
