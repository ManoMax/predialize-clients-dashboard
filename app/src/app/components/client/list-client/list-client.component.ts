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
  totais: any = {}

  card_client: boolean = true;
  card_totais: boolean = true;

  name: string = ''

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe(clients => {
      this.clients = clients;
    })
  }

  keyPress = (event) => {
    if (event.target.value !== '') {
      this.name = event.target.value;
      this.clientService.getByName(this.name).subscribe(clients => {
        this.clients = clients;
        this.card_totais = false;
        this.card_client = true;
      })
    } else {
      this.clientService.getAll().subscribe(clients => {
        this.clients = clients;
        this.card_totais = false;
        this.card_client = true;
      })
    }
  }

  listarClientes = () => {
    this.clientService.getAll().subscribe(clients => {
      this.card_totais = false;
      this.card_client = true;
    })
  }

  listarTotalizadores = () => {
    this.clientService.getGeneralTotals().subscribe(totais => {
      // this.clients = []
      this.totais = {
        "quant_clients": totais.quant_clients,
        "quant_enterprises": totais.quant_enterprises,
        "quant_realties": totais.quant_realties
      }
      this.card_client = false;
      this.card_totais = true;
    })
  }

  visualizarClient = (client : Client) => {
    console.log(client._id)
  }

}
