import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MyserviceService } from '../../Service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: MyserviceService,private router:Router) { }
  UserLogin:FormGroup;
  submitted = false;
  formData: any;
  resetForm(fb?: FormGroup) {
    this.UserLogin = this.fb.group({
      email: '',
      password: '',
    })
  }
  ngOnInit() {
    this.UserLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  res;
  getId;
  onSubmit(UserLogin?: FormGroup) {

    this.submitted = true;
    if (this.UserLogin.invalid) {
      return;
    }
    var result1 = {
      password: this.UserLogin.value.password,
      email: this.UserLogin.value.email
    }
    this.service.login(result1).subscribe((data) => {
      this.res = data;
      if (this.res != undefined) {
        //console.log(this.res || JSON);
        if (this.res.role == 1 && this.res.active == true) {
          this.getId = this.res.id;
          localStorage.setItem('user',this.res.id);
          this.router.navigate(['user-home']);
        }
        if (this.res.role == 2 && this.res.active == true) {
          this.getId = this.res.id;
          localStorage.setItem('mentor',this.res.id);
          this.router.navigate(['mentor-home']);
        }
        if (this.res.role == 3 && this.res.active == true) {
          this.getId = this.res.id;
          this.router.navigate(['admin']);
        }

      }
    });
  }

 // res2;
}

