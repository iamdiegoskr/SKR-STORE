import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { myValidators } from 'src/app/utils/myValidators';
import {AngularFireStorage} from '@angular/fire/storage'
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form:FormGroup;
  image$:Observable<string>;

  constructor(private fb: FormBuilder,
              private service:ProductsService,
              private router:Router,
              private storage:AngularFireStorage) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    //group, creamos un grupo de formControl basados en un json
    this.form = this.fb.group({
      id:['',Validators.required],
      image:['',Validators.required],
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

  get priceForm(){
    return this.form.get('price')
  }

  priceIsEmpty():boolean{
    return this.priceForm.hasError('required');
  }

  priceIsOk(){
    return this.priceForm.hasError('price_invalid')
  }

  uploadImage(event){
    const file = event.target.files[0];
    const name = `images/products/${file.name}`;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name,file);

    task.snapshotChanges().pipe(
      finalize(()=> {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(urlImage=>{
          this.form.get('image').setValue(urlImage)
        })
      })
    )
    .subscribe();

  }

}
