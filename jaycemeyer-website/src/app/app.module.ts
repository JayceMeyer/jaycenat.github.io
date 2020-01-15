import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ContactPageComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
