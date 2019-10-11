import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import {MyserviceService}from '../../Service/myservice.service';

@Component({
  selector: 'app-mentor-register',
  templateUrl: './mentor-register.component.html',
  styleUrls: ['./mentor-register.component.css']
})
export class MentorRegisterComponent implements OnInit {

  MentorRegister: FormGroup;
  submitted = false;
  formData:any;
  skillData:object;
  resetForm(fb ?: FormGroup){
    this.MentorRegister=this.fb.group({
      firstName :'',
      lastName :'',
      userName:'',
      email :'',
      contactNumber:'',
      technology:'',
      linkdinUrl:'',
      profile:'',
      yearOfExperience:'',
      password :'',
      ConfirmPassword:''
    })
  }
    constructor(private fb: FormBuilder,private service:MyserviceService) { }
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
      this.MentorRegister=this.fb.group({
        firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        userName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        contactNumber:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
        linkdinUrl:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        profile:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        yearOfExperience:['',Validators.required],
        technology:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(8)]],
        ConfirmPassword:['',[Validators.required,Validators.minLength(8)]]
        },{validator:this.MustMatch('password', 'ConfirmPassword')
      
    })

  this.getList();
  }
    result:FormGroup
    getList()
  {
  this.service.refreshList().subscribe(data=>{
    this.skillData=data;
    console.log("mydata " ,this.skillData)
  });
}
   
  
    results:FormGroup;

    onSubmit(){
      this.submitted = true;
    if (this.MentorRegister.invalid) {
        return;
    }
    alert('Successfully Registered!!');
  
    var results={
    firstName:this.MentorRegister.value.firstName,
    lastName:this.MentorRegister.value.lastName,
    userName:this.MentorRegister.value.userName,
    email:this.MentorRegister.value.email,
    contactNumber:this.MentorRegister.value.contactNumber,
    yearOfExperience:this.MentorRegister.value.yearOfExperience,
    password:this.MentorRegister.value.password,
    linkdinUrl:this.MentorRegister.value.linkdinUrl,
    technology:this.MentorRegister.value.technology,
    role:2,
    active:true,
  }
  console.log(results);
  this.service.postDetails(results).subscribe(res => {
     alert("Inserted Successfully");
      
  })
  
  
  this.resetForm();

    }
}
