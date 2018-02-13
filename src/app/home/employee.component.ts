import {Component, OnInit} from '@angular/core';
import { Employee } from '../models/employee.model';
import {ProductService} from '../home/employee.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'home',
  styleUrls: ['./employee.component.css'],
  templateUrl: './employee.component.html'
})
export class HomeComponent implements OnInit {
  d : any;
  constructor(private router: Router, private shareservices: ProductService , private route:ActivatedRoute) {
    
  }
  experiences : number[];
  qualification : string[];
  coding_languages : string[];
  code_language = [];
     box_check ( lang: string)
     {
       for(var i=0;i<this.coding_languages.length;i++)
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
  var uname=(this.route.snapshot.params['uname']);
  if(uname != undefined)
  {
  for(var i =0;i<this.shareservices.dataarray.length;i++)
  {
    if(this.shareservices.dataarray[i].username==uname)
    {
      this.model=this.shareservices.dataarray[i];
      break;
    }
  }
  this.shareservices.deletedata(this.shareservices.dataarray[i]);
  }
  }
 onSubmit(model : Employee)
  {
  console.log(this.model);
  this.d = this.model;
   this.shareservices.setdata(this.d);
   this.router.navigate(['/employeelist']);
  }
}