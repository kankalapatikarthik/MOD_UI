import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-landing',
  templateUrl: './mentor-landing.component.html',
  styleUrls: ['./mentor-landing.component.css']
})
export class MentorLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem('mentor');
    console.log(localStorage.getItem('mentor'));
    this.router.navigate(['/index']);
  }

}
