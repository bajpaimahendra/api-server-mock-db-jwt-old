import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product_id: number;
  editProductFrm;

  constructor(private route: ActivatedRoute, private router: Router, private ProductService: ProductService) {
    this.route.params.subscribe(
      params => {
        this.product_id = params['productId']
      }
    );
    //console.log(this.product_id);
  }

  ngOnInit() {
    this.editProductFrm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      rating: new FormControl('',[Validators.required]),
      
    });

    this.setEditFrmValues();
  }



  setEditFrmValues(){
    this.ProductService.getProductById(this.product_id).subscribe(
      result=>{
        console.log(result);
        delete result.locationId;
        delete result.familyId;
        this.editProductFrm.setValue(result);
      },
      err=>{
        console.log(err);
      }
    );
  }

  editProduct(){
    console.log(this.editProductFrm.valid);
    console.log(this.editProductFrm.value.id);
    this.ProductService.updateProduct(this.editProductFrm.value.id, this.editProductFrm.value).subscribe(
      result=>{
        //console.log('updated data ',result);
        this.router.navigate(['/products', {  'edit': 'success' }]);
      }
    );
    
  }


}//--end of class
