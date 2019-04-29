import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'lde-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {

  @ViewChild('notification') notification: ElementRef;


  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // this.renderer.insertBefore(document.body, this.notification.nativeElement, document.body.firstChild);


  }

}
