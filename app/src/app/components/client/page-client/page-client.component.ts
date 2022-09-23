import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/pages/client/client.model';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements AfterViewInit {

  id: string
  client: Client;

  @ViewChild('imgclient', null) input: ElementRef<HTMLImageElement>;

  load_image: string = "app/src/assets/load_image.jpg";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private clientService: ClientService) {}

  ngAfterViewInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    if (this.id !== null && this.id !== undefined && this.id !== '') {
      this.clientService.getById(this.id).subscribe(client => {
        this.client = client;
        if (client.image_src !== undefined) {
          this.renderer.setProperty(this.input.nativeElement, 'src', client.image_src);
        }
      })
    }
  }

  backToListClient() {
    this.router.navigate([`/client`]);
  }

}
