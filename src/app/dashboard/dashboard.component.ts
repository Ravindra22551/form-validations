import { Component } from '@angular/core';
import { FlipkartService } from '../services/flipkart.service';
import { Flipkart } from '../models/flipkart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  records:Flipkart[]=[];
constructor(private service:FlipkartService){}
ngOnInit():void{
  this.getall();
}
  getall():void{
    this.service.getall().subscribe(data=>this.records=data);

}
}
