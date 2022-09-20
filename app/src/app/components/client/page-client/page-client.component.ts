import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/pages/client/client.model';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  id: string
  client: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)

    if (this.id !== null || this.id !== undefined || this.id !== '') {
      this.clientService.getById(this.id).subscribe(client => {
        this.client = client;
        console.log(this.client)
      })
    }
  }

}
