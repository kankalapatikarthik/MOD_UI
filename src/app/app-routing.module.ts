import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MentorLandingComponent } from './Components/mentor-landing/mentor-landing.component';
import { MentorCurrentTrainingComponent } from './Components/mentor-current-training/mentor-current-training.component';
import { MentorCompletedTrainingComponent } from './Components/mentor-completed-training/mentor-completed-training.component';
import { EditSkillsComponent } from './Components/edit-skills/edit-skills.component';
import { MPaymentComponent } from './Components/m-payment/m-payment.component';
import { UserSearchComponent } from './Components/user-search/user-search.component';
import { MentorRegisterComponent } from './Components/mentor-register/mentor-register.component';
import { SearchMentorsComponent } from './Components/search-mentors/search-mentors.component';
import { UserMentorComponent } from './Components/user-mentor/user-mentor.component';
import { AdminAddRemoveTechnologiesComponent } from './Components/admin-add-remove-technologies/admin-add-remove-technologies.component';
import { AdminLandingPageComponent } from './Components/admin-landing-page/admin-landing-page.component';
import { ProposeTrainingComponent } from './Components/propose-training/propose-training.component';
import { UserNotificationsComponent } from './Components/user-notifications/user-notifications.component';
import { MentorNotificationsComponent } from './Components/mentor-notifications/mentor-notifications.component';
import { UserCurrentTrainingsComponent } from './Components/user-current-trainings/user-current-trainings.component';
import { UserCompletedTrainingsComponent } from './Components/user-completed-trainings/user-completed-trainings.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPaymentComponent } from './Components/user-payment/user-payment.component';
import { AdminBlockMentorComponent } from './Components/admin-block-mentor/admin-block-mentor.component';
import { AdminUserBlockComponent } from './Components/admin-user-block/admin-user-block.component';
import { AdminPaymentComponent } from './Components/admin-payment/admin-payment.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { MentorProfileComponent } from './Components/mentor-profile/mentor-profile.component';



const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:HomepageComponent},
  {path:"login",component:LoginComponent},
  
  {path:"register",component:RegisterComponent},
  {path:"mentor-home",component:MentorLandingComponent,
children:[
  {path:"notifications",component:MentorNotificationsComponent},
  {path:"mentor-current",component:MentorCurrentTrainingComponent},
  {path:'mentor-completed',component:MentorCompletedTrainingComponent},
  {path:"mentor-profile",component:MentorProfileComponent},
  {path:"mpayment",component:MPaymentComponent}
]},
  {path:"mentorcurrenttraining",component:MentorCurrentTrainingComponent},
  {path:"mentorcompletedtraining",component:MentorCompletedTrainingComponent},
  {path:"editskills",component:EditSkillsComponent},
  {path:"user-home",component:UserHomeComponent,
  children:[
    {path:'user-search',component:UserSearchComponent},
    {path:"proposetraining",component:ProposeTrainingComponent},
    {path:"usernotifications",component:UserNotificationsComponent},
    {path:"userpayment",component:UserPaymentComponent},
    {path:'user-current',component:UserCurrentTrainingsComponent},
    {path:"user-completed",component:UserCompletedTrainingsComponent},
    {path:"user-profile",component:UserProfileComponent}
  ]},
  {path:"mentorregister",component:MentorRegisterComponent},
  {path:"searchmentors",component:SearchMentorsComponent},
  {path:"usermentor",component:UserMentorComponent},
  {path:"technologies",component:AdminAddRemoveTechnologiesComponent},
  {path:"admin",component:AdminLandingPageComponent},
  {path:"usercurrenttrainings",component:UserCurrentTrainingsComponent},
  {path:"usercompletedtrainings",component:UserCompletedTrainingsComponent},
  {path:"admin-mentor-block",component:AdminBlockMentorComponent},
  {path:"admin-user-block",component:AdminUserBlockComponent},
  {path:"admin-payment",component:AdminPaymentComponent},
  {path:"user-profile",component:UserProfileComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
