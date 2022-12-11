import { Component, ViewChild } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders   } from '@angular/common/http';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  constructor(protected http:HttpClient) { }
   isNameValid = true;
   isNumberValid = true;
   isDistrictValid = true;
   selectedValues:any = "Select District";
   allData:any
   @ViewChild('registerForm') form1: any;

   districts: string[] = ["Dhaka","Borishal", "Rajshahi", "Sylhet"];
     registerData(data:any) {
      // this.http.get<any>("https://jsonplaceholder.ir/users").subscribe(data =>{
      //      this.allData = data;
      //      console.log(this.allData);
           
      // } )

      
      console.log(data);
      
      this.form1.reset();
      
      
     if(data.name.trim() == ""){
       this.isNameValid = false;
     }else{
      this.isNameValid = true;
     }
     if(data.number.trim()  == ""){
      this.isNumberValid = false;
     }else{
      this.isNumberValid = true;
     }
     if(data.district == ""){
      this.isDistrictValid = false;
     }
     else{
      this.isDistrictValid = true;
     }


  
     
    }

}
