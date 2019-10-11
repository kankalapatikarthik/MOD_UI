import { Component, OnInit } from '@angular/core';
import * as _ from "underscore";
import { FormBuilder } from '@angular/forms';
import { MyserviceService } from 'src/app/Service/myservice.service';
@Component({
  selector: 'app-admin-user-block',
  templateUrl: './admin-user-block.component.html',
  styleUrls: ['./admin-user-block.component.css']
})
export class AdminUserBlockComponent implements OnInit {

  AllData:object;
  UserData: object;
  UserDataById: object;


  constructor(private fb: FormBuilder, private service: MyserviceService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.getAllData().subscribe(data => {
      this.AllData = data;
      this.UserData=_.where(this.AllData,{role:1});
      console.log(this.UserData);

    });
  }
  block(id) {
    console.log(id);
    this.service.getUserById(id).subscribe(data => {
      this.UserDataById = data;
      console.log(this.UserDataById);


      var result = {
        email:this.UserDataById['email'],
        userName:this.UserDataById['userName'],
        password:this.UserDataById['password'],
        firstName:this.UserDataById['firstName'],
        lastName:this.UserDataById['lastName'],
        contactNumber:this.UserDataById['contactNumber'],
        role:this.UserDataById['role'],
        linkdinUrl:this.UserDataById['linkdinUrl'],
        yearOfExperience:this.UserDataById['yearOfExperience'],
        active:false,
        training:this.UserDataById['training']

      }
      console.log(result);
      this.service.userEdit(id, result).subscribe(res => {
        console.log('success');
        //console.log(res);
        this.getUser();
      });


    });
  }
  unblock(id) {
    console.log(id);
    this.service.getUserById(id).subscribe(data => {
      this.UserDataById = data;
      console.log(this.UserDataById);


      var result = {
        email:this.UserDataById['email'],
        userName:this.UserDataById['userName'],
        password:this.UserDataById['password'],
        firstName:this.UserDataById['firstName'],
        lastName:this.UserDataById['lastName'],
        contactNumber:this.UserDataById['contactNumber'],
        role:this.UserDataById['role'],
        linkdinUrl:this.UserDataById['linkdinUrl'],
        yearOfExperience:this.UserDataById['yearOfExperience'],
        active:true,
        training:this.UserDataById['training']

      }
      console.log(result);
      this.service.userEdit(id, result).subscribe(res => {
        console.log('success');
        //console.log(res);
        this.getUser();
      });


    });
  }

}
