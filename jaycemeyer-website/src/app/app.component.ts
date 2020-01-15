import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'jaycemeyer-website';
  date = new Date().getFullYear();
  displayAboutPage: boolean = true;
  displayPortfolioPage: boolean = false;
  displayContactPage: boolean = false;
  displayResumePage: boolean = false;

  loadPage(pageName: string) {
    switch(pageName) {
      case "about": {
        this.displayAboutPage = true;
        this.displayPortfolioPage = false;
        this.displayContactPage = false;
        this.displayResumePage = false;
        break;
      }
      case "portfolio": {
        this.displayAboutPage = false;
        this.displayPortfolioPage = true;
        this.displayContactPage = false;
        this.displayResumePage = false;
        break;
      }
      case "contact": {
        this.displayAboutPage = false;
        this.displayPortfolioPage = false;
        this.displayContactPage = true;
        this.displayResumePage = false;
        break;
      }
      case 'resume': {
        this.displayAboutPage = false;
        this.displayPortfolioPage = false;
        this.displayContactPage = false;
        this.displayResumePage = true;
        break;
      }
    }
    
    
  }
}
