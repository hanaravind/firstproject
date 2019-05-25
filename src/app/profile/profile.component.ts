import { ItemService } from './../service/item.service';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  productData:any =[];
  constructor(private http:DataService,private itemservice:ItemService) { }
  ngOnInit() {
    } 

}
