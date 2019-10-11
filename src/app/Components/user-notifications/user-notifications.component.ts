import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Service/myservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import * as _ from "underscore";


@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.css']
})
export class UserNotificationsComponent implements OnInit {

  userId: any;
  userTrainingData: any;
  acceptedTraining: object;
  pendingTraining: object;
  rejectedTraining: object;
  TrainingData: object;
  paymentDone: object;
  paymentNotDone: object;
  currentTraining: object;
  date: Date;
  startTrainingTime: object;
  endTrainingTime: object;
  dateCheckData: object;
  startdate1:Date;
  enddate1:Date;

  constructor(private service: MyserviceService, private router: Router) { }

  ngOnInit() {
    this.userId = localStorage.getItem('user');
    //console.log(this.userId);

    this.getTrainingByUserId();


  }



  index: any;
  pending: any;
  getTrainingByUserId() {
    this.service.userTrainingList(this.userId).subscribe(data => {
      this.userTrainingData = data;
      //console.log(this.userTrainingData);

      this.TrainingData = _.where(this.userTrainingData, { requested: true });
      this.pendingTraining = _.where(this.TrainingData, { rejectNotify: null });


      this.rejectedTraining = _.where(this.TrainingData, { rejectNotify: true });


      this.acceptedTraining = _.where(this.TrainingData, { rejectNotify: false });

      this.paymentDone = _.where(this.acceptedTraining, { paymentStatus: true });

      console.log(this.paymentDone);
      
      this.paymentNotDone = _.where(this.acceptedTraining, { paymentStatus: null });
      console.log('date checking');
      this.currentTraining = _.where(this.paymentDone, { progress : 0 });
      console.log('date checking');

      //var date2=moment(date).format('DD-MM-YYYY');


      //console.log(this.paymentDone);
      //console.log(this.startTrainingTime);
    });
  }


  /* ------------------------Payment--------------------------------- */


  payment(id) {
    const data = {
      trainingId: id
    }
    this.router.navigate(['/user-home/userpayment'], { queryParams: data });
  }

  /* ------------------------Start Training--------------------------------- */

  startTraining(id) {
    this.service.trainingById(id).subscribe(data => {
      this.dateCheckData = data;
      console.log(this.dateCheckData);

      this.startdate1 =this.dateCheckData['startDate'];
      this.enddate1 = this.dateCheckData['endDate'];

      let startdate=moment(this.startdate1).format("DD-MM-YYYY");
      console.log(startdate);
      let enddate=moment(this.enddate1).format("DD-MM-YYYY");
      console.log(enddate);

      let now = moment().format('DD-MM-YYYY');
      console.log(now);

      var result = {
        rejectNotify: false,
        timeSlot: this.dateCheckData['timeSlot'],
        startDate: this.dateCheckData['startDate'],
        endDate: this.dateCheckData['endDate'],
        userName: this.dateCheckData['userName'],
        fees: this.dateCheckData['fees'],
        userId: this.dateCheckData['userId'],
        mentorId: this.dateCheckData['mentorId'],
        mentorName: this.dateCheckData['mentorName'],
        skillId: this.dateCheckData['skillId'],
        skillname: this.dateCheckData['skillname'],
        requested:this.dateCheckData['requested'],
        status:"current",
        progress:0,
        paymentStatus:this.dateCheckData['paymentStatus']
      }
      console.log(result);
      

      if(now > enddate)
      {
        alert('date has expired');
      }
      else
      {
        if(now >= startdate)
        {
          this.service.trainingEdit(id,result).subscribe(res => {
            console.log('Started Successfully');
            this.getTrainingByUserId();
            this.router.navigate(['/user-home/user-current']);
          });
        }
        else
        {
          alert('Wait till the start date');
        }
      }
      
    });
    
  }

}
