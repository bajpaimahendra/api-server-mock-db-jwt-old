import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  isAdded:boolean=false;

  constructor(private ProductService: ProductService, private router: Router) { }

  addProductFrm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required]),
    rating: new FormControl('',[Validators.required])
  });

  ngOnInit() {
  }

  addProduct(frm: FormGroup){
    if(frm.valid){
      console.log(frm.value);
      this.ProductService.addProduct(frm.value).subscribe(
        result=>{
          //console.log(result);
          this.isAdded=true;
          this.router.navigate(['/products']);
        }
      );

    }
    
 
  }

}
