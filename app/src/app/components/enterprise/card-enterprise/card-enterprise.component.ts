import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-enterprise',
  templateUrl: './card-enterprise.component.html',
  styleUrls: ['./card-enterprise.component.scss']
})
export class CardEnterpriseComponent implements OnInit, AfterViewInit {

  @Input()
  data?: any;

  @ViewChild('imgEnterprise', null) input: ElementRef<HTMLImageElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let enterprise = this.data.enterprise;
    if (enterprise.image_src !== undefined) {
      this.renderer.setProperty(this.input.nativeElement, 'src', enterprise.image_src);
    }
  }

}
