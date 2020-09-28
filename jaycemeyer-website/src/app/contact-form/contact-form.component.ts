import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Contact } from './contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {

  @ViewChildren(NgModel) fields: QueryList<NgModel>;

  model = new Contact('', '', '');
  submitted = false;

  constructor(private http: HttpClient) { }

  onSubmit() { 
    this.submitted = true;
    this.http.post('https://formspree.io/meqpqwkq', { 
      name: this.model.name, 
      _replyto: this.model.email, 
      message: this.model.message })
      .subscribe();
  }

  newContact() {
    this.model = new Contact('', '', '');
    this.fields.forEach(model => model.control.reset());
    this.submitted = false;
  }

}