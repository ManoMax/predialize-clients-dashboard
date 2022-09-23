import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Client } from 'src/app/pages/client/client.model';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent implements OnInit, AfterViewInit {

  @Input()
  client?: Client;

  @ViewChild('img_client', null) input: ElementRef<HTMLImageElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let client = this.client;
    if (client.image_src !== undefined) {
      this.renderer.setProperty(this.input.nativeElement, 'src', client.image_src);
    }
  }

}
