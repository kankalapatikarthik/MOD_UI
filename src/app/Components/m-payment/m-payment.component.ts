import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/Service/myservice.service';
import * as _ from "underscore";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-m-payment',
  templateUrl: './m-payment.component.html',
  styleUrls: ['./m-payment.component.css']
})
export class MPaymentComponent implements OnInit {
  constructor(private fb: FormBuilder, private service:MyserviceService) { }
  PaymentData: object;
  PaymentDataById: object;
  mentorId:any;

  ngOnInit() {
    this.mentorId = localStorage.getItem('mentor');
    this.getPayment();
    console.log(this.mentorId);
  }

  getPayment() {
    this.service.paymentDetailsByMentorId(this.mentorId).subscribe(data => {
      this.PaymentData = data;
      console.log(this.PaymentData);
    });
  }


}
