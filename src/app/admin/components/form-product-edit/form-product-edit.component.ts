import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { myValidators } from 'src/app/utils/myValidators';

@Component({
  selector: 'app-form-product-edit',
  templateUrl: './form-product-edit.component.html',
  styleUrls: ['./form-product-edit.component.scss'],
})
export class FormProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private service: ProductsService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getProductById(this.id).subscribe((product) => {
        this.form.patchValue(product)
      });
    });
  }

  private buildForm() {
    //group, creamos un grupo de formControl basados en un json
    this.form = this.fb.group({
      id: [{ value: '', disabled: true }],
      image: [''],
      title: ['', Validators.required],
      price: ['', [Validators.required, myValidators.isPriceValid]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  saveProduct(e: Event) {
    e.preventDefault();
    const newProduct = this.form.value;
    this.service.updateProduct(this.id,newProduct).subscribe((product) => {
      this.router.navigate(['admin/products']);
    });
  }

  get priceForm() {
    return this.form.get('price');
  }

  priceIsEmpty(): boolean {
    return this.priceForm.hasError('required');
  }

  priceIsOk() {
    return this.priceForm.hasError('price_invalid');
  }
}
