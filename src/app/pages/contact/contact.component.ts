import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from "@angular/forms";
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: any;

submitForm() {
  const body = new HttpParams()
    .set('form-name', 'contact')
    .append('name', this.contactForm.value.name)

  this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
    res => { }
  );
}

constructor(private fb: FormBuilder, private http: HttpClient) {
  this.contactForm = this.fb.group({
    name: ['', Validators.required]
  });
 }

ngOnInit() {
}

}
