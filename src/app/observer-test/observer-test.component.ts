import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-observer-test',
  templateUrl: './observer-test.component.html',
  styleUrls: ['./observer-test.component.css']
})
export class ObserverTestComponent implements OnInit {
  mioForm: FormGroup;
  username: FormControl;
  user!: string;

  constructor(fb: FormBuilder) {
    this.mioForm = fb.group(
      {
        'username': ['', Validators.required]
      }
    );

    this.username = this.mioForm.controls['username'] as FormControl;

    this.username.valueChanges.subscribe(
      (valore: string) => {
        console.log("Username modificato", valore);
      }
    )

    this.mioForm.valueChanges.subscribe(
      (form:any) => {
        console.log("Form modificato", form);
      }
    )

    

  }

  onSubmit(form:any):void {
    console.log('Valore inserito', form);
  }


  ngOnInit(): void {
  }

}
