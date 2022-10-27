import { Component,OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent implements OnInit{
   public products={};
  constructor(private service:ProductService){
    
  }
  ngOnInit(): void {
    this.products=this.service.getProducts();
  }
   
}
