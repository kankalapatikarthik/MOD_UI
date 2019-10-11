import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Service/myservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propose-training',
  templateUrl: './propose-training.component.html',
  styleUrls: ['./propose-training.component.css']
})
export class ProposeTrainingComponent implements OnInit {

  paramId: number;
  trainerTechnology: string;

  trainerData: any;
  userData: any;
  skillData: object;

  showRequestedCourse;any;
  userId:any;

  timeSlot: string;
  startDate: Date;
  endDate: Date;
  userName: string;
  email: string;
  name: string;
  fees: string;
  prerequisites: string;
  yourName:string;
  request:Boolean;
  requestSent:any;

  constructor(private service:MyserviceService,private router: Router,private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.getParamData();
    this.getById();
    this.userId=localStorage.getItem('user');
    this.getSkillByName();
    this.getUserById();
  }
  getUserById() {
    this.service.getUserById(this.userId).subscribe(data => {
      this.userData = data;
      console.log(this.userData);
    });
  }
  getParamData() {
    this.route.queryParams.subscribe(params => {
      let id = params['trainerId'];
      this.paramId = +id;
      this.trainerTechnology=params['trainingName'];
      console.log(this.paramId);
    });
  }

  getSkillByName(){
    this.service.refreshList1(this.trainerTechnology).subscribe(data=>{
      this.skillData=data[0];
      console.log(this.skillData);
    });
  }
  getById() {
    this.service.getUserById(this.paramId).subscribe(data => {
      this.trainerData = data;
      console.log(this.trainerData);
    });
  }


  onSubmit(){
    var result={
      timeSlot: this.timeSlot,
      startDate: this.startDate,
      endDate: this.endDate,
      userName: this.userData.firstName,
      fees: this.skillData['fees'],
      userId:this.userData.id,
      mentorId:this.trainerData.id,
      mentorName:this.trainerData.firstName,
      skillId:this.skillData['id'],
      skillName:this.skillData['name'],
      requested:'True',
      paymentStatus:null
    }
     console.log(result);
    this.service.addtraining(result).subscribe(res => {
      console.log(res);
      console.log('request sent successfully');
      this.router.navigate(['/user-home/usernotifications'])
    }) 

  }

}
