import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  readonly rootURL="https://localhost:44393/api";

  constructor(private http:HttpClient) {
   }

  getData(result){
    return this.http.post(this.rootURL+"/GetAllData",result);
  }
  getAllData(){
    return this.http.get(this.rootURL+"/GetAllData");
  }  
  signin(result){
    return this.http.post(this.rootURL+"/create",result);
  } 
  login(result1){
    return this.http.post(this.rootURL+"/login",result1);
  }
  addtech(result){
    return this.http.post(this.rootURL+"/addtech",result);
  } 
  addtraining(result){
    return this.http.post(this.rootURL+"/trainingAdd",result);
  } 
  addPayment(result){
    return this.http.post(this.rootURL+"/addPayment",result);
  } 
  refreshList(){
    return this.http.get(this.rootURL+"/GetAllSkill")
  }

  getUserById(id){
    return this.http.get(this.rootURL+"/Details/"+id)
  }
  
  deleteSkills(id){
    return this.http.delete(this.rootURL+"/deleteSkills/"+id)
  }
  skillList(){
    return this.http.get(this.rootURL+"/mentor")
  }
  paymentList(){
    return this.http.get(this.rootURL+"/GetAllPayment")
  }
  paymentDetailsById(id){
    return this.http.get(this.rootURL+"/paymentById/"+id)
  }
  paymentEdit(id,result){
    return this.http.put(this.rootURL+"/paymentEdit/"+id,result)
  }
  userEdit(id,result){
    return this.http.put(this.rootURL+"/EditUserData/"+id,result)
  }
  trainerList(name){
    return this.http.get(this.rootURL+"/searchTrainer/"+name)
  }
  userTrainingList(id){
    return this.http.get(this.rootURL+"/userTrainings/"+id)
  }
  mentorTrainingList(id){
    // console.log(id);
    return this.http.get(this.rootURL+"/mentorTrainings/"+id)
  }
  skilldetails(name){
    return this.http.get(this.rootURL+"/skillByName/"+name)
  }
  refreshList1(trainerTechnology){
    return this.http.get(this.rootURL+"/searchSkill/"+trainerTechnology)
  }
  trainingEdit(id,result){
    return this.http.put(this.rootURL+"/trainingEdit/"+id,result)
  }
  trainingById(id){
    return this.http.get(this.rootURL+"/trainingDetails/"+id)
  }
  postDetails(result){
    return this.http.post(this.rootURL+"/create",result);
  }
  addtechnology(result){
    return this.http.post(this.rootURL+"/createSkill",result);
  }
  userDataEdit(id,result){
    return this.http.put(this.rootURL+"/EditUserData1/"+id,result)
  }
  paymentDetailsByMentorId(id){
    return this.http.get(this.rootURL+"/paymentByMentor/"+id)
  }

}

