import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators,FormGroup,ReactiveFormsModule } from '@angular/forms';
import {MyserviceService}from '../../Service/myservice.service';
@Component({
  selector: 'app-admin-add-remove-technologies',
  templateUrl: './admin-add-remove-technologies.component.html',
  styleUrls: ['./admin-add-remove-technologies.component.css']
})
export class AdminAddRemoveTechnologiesComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:MyserviceService) { }

  AddTechnologies:FormGroup;
  submitted = false;
  skillData:object;
  resetForm(fb ?: FormGroup){
    this.AddTechnologies=this.fb.group({
      name :'',
      toc :'',
      prerequisites :'',
      fees:''
    })
  }

  ngOnInit() {

   

    this.AddTechnologies=this.fb.group({
      name:['',Validators.required],
      toc:['',Validators.required],
      prerequisites:['',Validators.required],
      fees:['',Validators.required]
  });


  this.getList();

  }


getList()
{
  this.service.refreshList().subscribe(data=>{
    this.skillData=data;
    console.log("mydata " ,this.skillData)
  });
}


  onSubmit(AddTech ?: FormGroup){
    this.submitted = true;
    if (this.AddTechnologies.invalid) {
      return;
    }
    var result={
      name:this.AddTechnologies.value.name,
      toc:this.AddTechnologies.value.toc,
      prerequisites:this.AddTechnologies.value.prerequisites,
      fees:this.AddTechnologies.value.fees,
    }
    this.service.addtechnology(result).subscribe(res => {
      //console.log('hi');
      console.log(res);
      this.getList();
    })
    this.resetForm();
    
  }
  deleteSkill(id){
    this.service.deleteSkills(id).subscribe(res => {
      this.getList();
    })
    
    this.resetForm();
    
  }
}
