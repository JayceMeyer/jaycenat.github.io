import { Component, OnInit } from '@angular/core';
import { SlideDownAnimation } from 'src/assets/animations';

@Component({
  selector: 'resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css'],
  animations: [SlideDownAnimation]
})
export class ResumePageComponent implements OnInit {

  openClose: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("content-detail").style.zIndex = '1'
    }, 
    350)
  }

}
