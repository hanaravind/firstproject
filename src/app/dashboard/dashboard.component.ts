import { Router } from '@angular/router';
import { ItemService } from './../service/item.service';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
arrays:any=[];
  constructor(private http: DataService,private itemservice:ItemService,private route:Router) { }
  ngOnInit() {
    this.http.getHttp('photos').subscribe((data)=>{
      this.arrays = data.slice(0,5);
          });
  }

}
