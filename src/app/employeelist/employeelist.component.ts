import {Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import {ProductService} from '../home/employee.service';
import {Router} from '@angular/router';
import {HomeComponent} from '../home/employee.component';

@Component({
  selector: 'employeelist',
  styleUrls: ['./employeelist.component.css'],
  templateUrl: './employeelist.component.html'
})
export class EmployeeListComponent implements OnInit  {
  
   d : any;
   constructor(private router: Router, private shareservices: ProductService  )
   {

   }
  ngOnInit(){
    this.d=this.shareservices.getdata();
  }
  deleteentry(emp :Employee)
  {
    this.d=this.shareservices.deletedata(emp);
  }
  editentry(emp: Employee)
  {
    this.router.navigate(["/employee", emp.username]);
    
  }

 }
