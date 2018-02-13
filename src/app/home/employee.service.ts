import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Employee } from '../models/employee.model';
import {HomeComponent} from '../home/employee.component';
@Injectable()
export class ProductService {
    data : any=[];
     setdata(data : any)
     {
       this.data.push(data);
     }
     getdata()
     {
         return this.data;
     }
}