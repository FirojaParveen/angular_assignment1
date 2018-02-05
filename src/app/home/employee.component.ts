import {Component, OnInit} from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'home',
  styleUrls: ['./employee.component.css'],
  templateUrl: './employee.component.html'
})
export class HomeComponent implements OnInit {
  experiences : number[];
  qualification : string[];
  coding_languages : string[];
  code_language = [];
     box_check ( lang: string)
     {
       for(var i=0;i<5;i++)
       {
         var flag=0;
         if (this.code_language[i] == lang)
         {
           flag=1;
           break;
         }
       }
         if(flag==1)
         {
           this.code_language.splice(i,1);
         }
         else{
           this.code_language.push(lang);
         }
       
     }

 

 model = new Employee('' , '' , '' , '', '', '' , '','','','', this.code_language);

  ngOnInit(){
  this.experiences= [0,1,2,3,4,5];
  this.qualification= ['btech','mtech','mba','phd'];
  this. coding_languages= ['C/C++','JAVA','C#','PHP','PYTHON'];
  }
 onSubmit()
  {
    console.log(this.model);
  }
}