import { Component, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

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

  onSubmit() { 
    this.submitted = true;
  }

  newContact() {
    this.model = new Contact('', '', '');
    this.fields.forEach(model => model.control.reset());
    this.submitted = false;
  }
  
}