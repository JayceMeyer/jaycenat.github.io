import { Component, OnInit } from '@angular/core';
import { SlideDownAnimation } from 'src/assets/animations';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
  animations: [SlideDownAnimation]
})
export class ContactPageComponent implements OnInit {

  openClose: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("content-detail").style.zIndex = '1'
    }, 
    350)
  }

}
