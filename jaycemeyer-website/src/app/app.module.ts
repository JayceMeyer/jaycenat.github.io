import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { NgxExtendedPdfViewerComponent } from '../../node_modules/ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    ContactPageComponent,
    ResumePageComponent,
    NgxExtendedPdfViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
