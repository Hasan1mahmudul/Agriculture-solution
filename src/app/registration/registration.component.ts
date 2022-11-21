import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

   districts: string[] = ["Dhaka","Borishal", "Rajshahi", "Sylhet"];
     registerData(data:any) {
     console.log(data.number);
     
    
   }

}
