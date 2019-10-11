import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import {MyserviceService}from '../../Service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder,private service:MyserviceService) { }
  UserRegister: FormGroup;
  submitted = false;
  formData:any;
  resetForm(fb ?: FormGroup){
    this.UserRegister=this.fb.group({
      firstName :'',
      lastName :'',
      userName:'',
      email :'',
      password :'',
      contactNumber:'',
      ConfirmPassword:''
    })
  }

  MustMatch( controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } 
      else {
          matchingControl.setErrors(null);
      }
    }
  }
    ngOnInit() {
      this.UserRegister=this.fb.group({
        firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        userName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        contactNumber:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
        password:['',[Validators.required,Validators.minLength(8)]],
        ConfirmPassword:['',Validators.minLength(8)]
        },{validator:this.MustMatch('password', 'ConfirmPassword')
      });
    }
    result:FormGroup;

   
  
  results:FormGroup;
  onSubmit(){
    this.submitted = true;
    if (this.UserRegister.invalid) {
        return;
    }
    alert('Successfully Registered!!');
  
    var results={
    firstName:this.UserRegister.value.firstName,
    lastName:this.UserRegister.value.lastName,
    userName:this.UserRegister.value.userName,
    email:this.UserRegister.value.email,
    contactNumber:this.UserRegister.value.contactNumber,
    password:this.UserRegister.value.password,
    role:1,
    active:true,
  }
  this.service.postDetails(results).subscribe(res => {
     alert("Inserted Successfully")
      
  })

  this.resetForm();
  
}    

}

