import { ItemService } from './../service/item.service';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; // import the router for getting the value

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  productData:any =[];
//   constructor(private http:DataService,private itemservice:ItemService) { }
  displayString;

  constructor(private http: DataService, private itemservice: ItemService, private route: ActivatedRoute,
              private router: Router) {
           console.log('log ', this.route.paramMap['destination'].value.id);
           this.displayString = this.route.paramMap['destination'].value.id;
  }
  
  ngOnInit() {
    } 

}
