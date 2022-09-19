import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../pages/client/client.model';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];

  name: string = ''

  keyPress = (event) => {
    if (event.target.value !== '') {
      this.name = event.target.value;
      this.clientService.getByName(this.name).subscribe(clients => {
        this.clients = clients;
      })
    } else {
      this.clientService.getAll().subscribe(clients => {
        this.clients = clients;
      })
    }
  }
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(clients => {
      this.clients = clients;
    })
  }
}
