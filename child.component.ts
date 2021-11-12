import { Component, OnInit } from '@angular/core';
import { MobileModel } from 'src/Models/MobileModel';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  productinchild:MobileModel[]=[];

  constructor() 
  {
    //this.getProducts();
   }

  ngOnInit(): void {
    this.productinchild=[{
      ProductId: 1, 
      Brand: "Oppo",  
      Price:7810.23               
     },
     {
      ProductId: 2, 
      Brand: "Oneplus",  
      Price: 20000        
     },
     {
      ProductId: 3, 
      Brand: "Apple",  
      Price: 80000 
     }
    ];
  }
 public getProducts()
 {
  //  this.productinchild=[{
  //   ProductId: 1, 
  //   Brand: "Oppo",  
  //   Price:7810.23               
  //  },
  //  {
  //   ProductId: 2, 
  //   Brand: "Oneplus",  
  //   Price: 20000        
  //  },
  //  {
  //   ProductId: 3, 
  //   Brand: "Apple",  
  //   Price: 80000 
  //  }
  // ];

 }
}
