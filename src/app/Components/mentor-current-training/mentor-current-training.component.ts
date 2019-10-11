import { Component, OnInit } from '@angular/core';
import * as _ from "underscore";
import { MyserviceService } from 'src/app/Service/myservice.service';

@Component({
  selector: 'app-mentor-current-training',
  templateUrl: './mentor-current-training.component.html',
  styleUrls: ['./mentor-current-training.component.css']
})
export class MentorCurrentTrainingComponent implements OnInit {

  mentorId: any;
  mentorTrainingData: object;
  currentTraining: object;
  TrainingData: object;
  constructor(private service: MyserviceService) { }

  ngOnInit() {
    this.mentorId = localStorage.getItem('mentor');
    this.getTrainingByUserId();
  }

  getTrainingByUserId() {
    this.service.mentorTrainingList(this.mentorId).subscribe(data => {
      this.mentorTrainingData = data;
      this.currentTraining = _.where(this.mentorTrainingData, { status: "current" });
      console.log(this.currentTraining);
    });
  }

}
