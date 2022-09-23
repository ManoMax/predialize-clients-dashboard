import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../pages/client/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];
  totais: any = {}

  card_client: boolean = true;
  card_totais: boolean = false;

  name: string = ''

  constructor(private clientService: ClientService,
    private router: Router) { }

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
    this.router.navigate([`/page/${client._id}`]);
  }

}
