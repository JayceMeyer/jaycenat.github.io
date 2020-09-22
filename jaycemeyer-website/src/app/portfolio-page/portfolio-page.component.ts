import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SlideDownAnimation } from 'src/assets/animations';

@Component({
  selector: 'portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css'],
  animations: [SlideDownAnimation]
})
export class PortfolioPageComponent implements OnInit {

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
