import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userForm: FormGroup;
  username: FormControl;
 


  constructor(fb: FormBuilder) { 
    this.userForm = fb.group({
    'username' : ['', Validators.required]
    });

    this.username = this.userForm.controls['username'] as FormControl;
 
  }

  onSubmit(form:any):void {
    console.log('Valore inserito', form);
  }

  ngOnInit(): void {
  }

}
