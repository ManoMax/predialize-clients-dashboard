import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-enterprise',
  templateUrl: './card-enterprise.component.html',
  styleUrls: ['./card-enterprise.component.scss']
})
export class CardEnterpriseComponent implements OnInit, AfterViewInit {

  @Input()
  data?: any;
  @Input()
  page_client_view: boolean;

  @ViewChild('imgEnterprise', null) input: ElementRef<HTMLImageElement>;
  @ViewChild('info_list', null) input2: ElementRef<HTMLImageElement>;
  @ViewChild('info_list2', null) input3: ElementRef<HTMLImageElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    let enterprise = this.data;
    if (enterprise.image_src !== undefined) {
      this.renderer.setProperty(this.input.nativeElement, 'src', enterprise.image_src);
    }

    if (this.page_client_view !== undefined && this.page_client_view === true) {
      this.renderer.setStyle(this.input2.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.input3.nativeElement, 'display', 'none');
    }
  }

}
