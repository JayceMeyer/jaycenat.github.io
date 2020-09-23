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
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("content-detail").style.zIndex = '1'
    }, 
    350)
  }

  processForm() {
    const allInfo = 'My name is ${this.name}. My email is ${this.email}. My message is ${this.message}';
    alert(allInfo);
  }

}
