import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
myPosts:any=[];
  constructor(private http: DataService) { }

  ngOnInit() {
    this.http.getHttp('users').subscribe((data)=>{
      this.myPosts = data;
          });
  }

}
