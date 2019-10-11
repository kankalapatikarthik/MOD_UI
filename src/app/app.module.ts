import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MentorLandingComponent } from './Components/mentor-landing/mentor-landing.component';
import { MentorCurrentTrainingComponent } from './Components/mentor-current-training/mentor-current-training.component';
import { MentorCompletedTrainingComponent } from './Components/mentor-completed-training/mentor-completed-training.component';
import { EditSkillsComponent } from './Components/edit-skills/edit-skills.component';
import { MPaymentComponent } from './Components/m-payment/m-payment.component';
import { UserSearchComponent } from './Components/user-search/user-search.component';
import { UserPaymentComponent } from './Components/user-payment/user-payment.component';
import { MentorRegisterComponent } from './Components/mentor-register/mentor-register.component';
import { SearchMentorsComponent } from './Components/search-mentors/search-mentors.component';
import { UserMentorComponent } from './Components/user-mentor/user-mentor.component';
import{FormsModule,ReactiveFormsModule}from  '@angular/forms';
import{HttpClientModule, HttpClient}from '@angular/common/http';
import { AdminAddRemoveTechnologiesComponent } from './Components/admin-add-remove-technologies/admin-add-remove-technologies.component';
import { AdminLandingPageComponent } from './Components/admin-landing-page/admin-landing-page.component';
import { ProposeTrainingComponent } from './Components/propose-training/propose-training.component';
import { UserNotificationsComponent } from './Components/user-notifications/user-notifications.component';
import { MentorNotificationsComponent } from './Components/mentor-notifications/mentor-notifications.component';
import { UserCompletedTrainingsComponent } from './Components/user-completed-trainings/user-completed-trainings.component';
import { UserCurrentTrainingsComponent } from './Components/user-current-trainings/user-current-trainings.component';
import { AdminBlockMentorComponent } from './Components/admin-block-mentor/admin-block-mentor.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminUserBlockComponent } from './Components/admin-user-block/admin-user-block.component';
import { AdminPaymentComponent } from './Components/admin-payment/admin-payment.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { MentorProfileComponent } from './Components/mentor-profile/mentor-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    MentorLandingComponent,
    MentorCurrentTrainingComponent,
    MentorCompletedTrainingComponent,
    EditSkillsComponent,
    MPaymentComponent,
    UserSearchComponent,
    UserPaymentComponent,
    MentorRegisterComponent,
    SearchMentorsComponent,
    UserMentorComponent,
    AdminAddRemoveTechnologiesComponent,
    AdminLandingPageComponent,
    ProposeTrainingComponent,
    UserNotificationsComponent,
    MentorNotificationsComponent,
    UserCompletedTrainingsComponent,
    UserCurrentTrainingsComponent,
    AdminBlockMentorComponent,
    UserHomeComponent,
    AdminUserBlockComponent,
    AdminPaymentComponent,
    UserProfileComponent,
    MentorProfileComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
