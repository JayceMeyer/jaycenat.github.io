import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SlideDownAnimation } from 'src/assets/animations';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  animations: [SlideDownAnimation]
})
export class AboutPageComponent implements OnInit {

  @Output() showResumePage = new EventEmitter();

  openClose: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("content-detail").style.zIndex = '1'
    }, 
    350)
  }

  loadResumePage() {
    this.showResumePage.emit();
  }

}
