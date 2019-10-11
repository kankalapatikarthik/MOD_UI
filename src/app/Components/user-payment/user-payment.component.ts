import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Service/myservice.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {

  paramId;
  TrainingDetails;
  constructor(private service: MyserviceService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getParamData();
    this.getByTrainingId();
  }

  getParamData() {
    this.route.queryParams.subscribe(params => {
      this.paramId = params['trainingId'];
      console.log(this.paramId);
    });
  }

  getByTrainingId() {
    this.service.trainingById(this.paramId).subscribe(data => {
      this.TrainingDetails = data;
      console.log(this.TrainingDetails.name);
    });
  }
  onSubmit(){
    var result={
      amount:this.TrainingDetails['fees'],
      mentorId:this.TrainingDetails['mentorId'],
      mentorName:this.TrainingDetails['mentorName'],
      trainingId:this.paramId,
      skillName:this.TrainingDetails['skillname']
    }
    console.log(result);

    this.service.addPayment(result).subscribe(data => {
      console.log('payment successfull');
    });


    var result1 = {
      rejectNotify: false,
      timeSlot: this.TrainingDetails.timeSlot,
      startDate: this.TrainingDetails.startDate,
      endDate: this.TrainingDetails.endDate,
      userName: this.TrainingDetails.userName,
      fees: this.TrainingDetails.fees,
      userId: this.TrainingDetails.userId,
      mentorId: this.TrainingDetails.mentorId,
      mentorName: this.TrainingDetails.mentorName,
      skillId: this.TrainingDetails.skillId,
      skillname: this.TrainingDetails.skillname,
      requested:true,
      paymentStatus:true
    }
    console.log(result1);
    this.service.trainingEdit(this.paramId,result1).subscribe(res => {
      console.log('success');
      console.log(res);
    });
    this.router.navigate(['/user-home/usernotifications']);
    
  }

}
