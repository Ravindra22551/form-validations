import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formgroup!:FormGroup;
  constructor(private fb:FormBuilder){
    this.formgroup=this.fb.group({
      username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      adress:['',[Validators.required]],
      phonenumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      pincode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
    })
  }
onsubmit(){
  if(this.formgroup.valid){
    alert('successfully added');

  }
  else{
    alert('something went wrong');
  }
}
}
