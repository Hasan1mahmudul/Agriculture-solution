import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
   isNameValid = true;
   isNumberValid = true;
   isDistrictValid = true;
   selectedValues:any = "Select District";
   @ViewChild('registerForm') form1: any;

   districts: string[] = ["Dhaka","Borishal", "Rajshahi", "Sylhet"];
     registerData(data:any) {
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
     if(data.districts == ""){
      this.isDistrictValid = false;
     }
     else{
      this.isDistrictValid = true;
     }
     
   }

}
