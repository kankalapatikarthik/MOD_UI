import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
import { MyserviceService }from '../../Service/myservice.service';

import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:MyserviceService,private router: Router) { }

  Search:FormGroup;
  skillData:object;


  getSkills()
  {
  this.service.refreshList().subscribe(data=>{
    this.skillData=data;
    console.log(this.skillData);
  });
  }

  ngOnInit() {

    this.Search=this.fb.group({
      technology:['',Validators.required]
    });

    this.getSkills();

  }
Trainerdetails:object;
  onSubmit()
  {
      if (this.Search.invalid) {
        return;
      }
      
      this.service.trainerList(this.Search.value.technology).subscribe(data=>{
        this.Trainerdetails=data;
        console.log('checking');
        console.log(this.Trainerdetails);
      });
      
  
  }
  onPropose(Id)
  {
    const data={
      trainerId:Id,
      trainingName:this.Search.value.technology
    }
    console.log('data passed to propose ');
    this.router.navigate(['/user-home/proposetraining'],{queryParams:data});
  }


   
}


