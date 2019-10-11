import { Component, OnInit } from '@angular/core';
import * as _ from "underscore";
import { MyserviceService } from 'src/app/Service/myservice.service';

@Component({
  selector: 'app-mentor-completed-training',
  templateUrl: './mentor-completed-training.component.html',
  styleUrls: ['./mentor-completed-training.component.css']
})
export class MentorCompletedTrainingComponent implements OnInit {

  mentorId: any;
  mentorTrainingData: object;
  completedTraining: object;
  TrainingData: object;
  constructor(private service: MyserviceService) { }

  ngOnInit() {
    this.mentorId = localStorage.getItem('mentor');
    this.getTrainingByUserId();
  }

  getTrainingByUserId() {
    this.service.mentorTrainingList(this.mentorId).subscribe(data => {
      this.mentorTrainingData = data;
      this.completedTraining = _.where(this.mentorTrainingData, { status: "completed" });
      console.log(this.completedTraining);
    });
  }


}
