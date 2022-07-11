import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userForm: FormGroup;
  username: FormControl;
  password: FormControl;


  constructor(fb: FormBuilder) { 
    this.userForm = fb.group({
    'username' : [],
    'password' : [],  
    });

    this.username = this.userForm.controls['username'] as FormControl;
    this.password = this.userForm.controls['password'] as FormControl;
  }

  onSubmit(form:any):void {
    console.log('Valore inserito', form);
  }

  ngOnInit(): void {
  }





}
