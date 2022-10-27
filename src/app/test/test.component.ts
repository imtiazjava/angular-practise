import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public userdata=[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
   this.service
       .getProducts()
       .subscribe(data=>this.userdata=data);
               

  }

}
