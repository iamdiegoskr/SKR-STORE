import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { myValidators } from 'src/app/utils/myValidators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form:FormGroup;

  constructor(private fb: FormBuilder,
              private service:ProductsService,
              private router:Router) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    //group, creamos un grupo de formControl basados en un json
    this.form = this.fb.group({
      id:['',Validators.required],
      image:[''],
      title:['',Validators.required],
      price:['',[Validators.required,myValidators.isPriceValid]],
      description:['',[Validators.required, Validators.minLength(20), Validators.maxLength(100)]]
    })
  }

  saveProduct(e:Event){
    e.preventDefault()
    const newProduct = this.form.value;
    this.service.createProduct(newProduct).subscribe(product=>{
      console.log(product);
      this.router.navigate(['admin/products'])
    })
  }

}
