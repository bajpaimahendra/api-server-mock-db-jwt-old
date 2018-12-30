import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  private products = '';
  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProductsListing();

  }
  getProductsListing() {
    console.log('--Jmd--');
    this.ProductService.getProducts().subscribe(
      (resData: any) => {

        this.products = resData;
        console.log(this.products);
      }
    );
  }

  deleteProduct(product_id){
    console.log(product_id);
    this.ProductService.deleteProduct(product_id).subscribe(
      result=>{
        //console.log(result);
        //this.router.navigate(['/products',{'delete':'success'}]);
        //this.router.navigateByUrl('/products?delete=success');
        this.getProductsListing();
      }
    );

  }


}//-- end of class
