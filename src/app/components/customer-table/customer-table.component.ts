import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Customer } from '../../interfaces/customer.model';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit{
  customers :Customer[] = []
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.getCustomers().subscribe((data:Customer[])=>{
      this.customers = data;

    })
  }



}
