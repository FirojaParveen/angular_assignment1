import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Employee } from '../models/employee.model';
import {HomeComponent} from '../home/employee.component';
@Injectable()
export class ProductService {
    dataarray : any=[];
     setdata(data : any)
     {
       this.dataarray.push(data);
     }
     getdata()
     {
         return this.dataarray;
     }
     deletedata(data : any)
     {
         for(var i=0;i<this.dataarray.length;i++)
         {
             if(this.dataarray[i].username==data.username)
             {
                 this.dataarray.splice(i,1);
                  
             }
         }
         return(this.dataarray);
     }
}