import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function userValidator(control : FormControl) : {[s:string]:boolean} {
  if(!control.value.match("^[a-zA-Z0-9._-]{2,}$")) {
    return { invalidUser : true }
  } else {
    return { invalidUser : false }
  }
}


@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.css']
})
export class CustomValidatorComponent implements OnInit {
  userForm: FormGroup;
  username: FormControl;


  constructor(fb: FormBuilder) { 
    this.userForm = fb.group({
    'username' : ['', Validators.compose([
      Validators.required, userValidator])]
    });

    this.username = this.userForm.controls['username'] as FormControl;
  }

  onSubmit(form:any):void {
    console.log('Valore inserito', form);
  }

  ngOnInit(): void {
  }

}
