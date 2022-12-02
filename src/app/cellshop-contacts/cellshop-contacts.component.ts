import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { concatAll, debounce, debounceTime } from 'rxjs';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-cellshop-contacts',
  templateUrl: './cellshop-contacts.component.html',
  styleUrls: ['./cellshop-contacts.component.scss']
})
export class CellshopContactsComponent {
  form!: FormGroup;
  msg = false;
  product = [];
  constructor(
    private formBuilder: FormBuilder,
    private productDataService: ProductDataService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['',  [Validators.required]],
      name: ['',  [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  addContacts(event: Event) {
    event.preventDefault();
    if(!this.form.valid){
      //this.productDataService.addContacts(this.form);
      this.form.reset();
    }
  }

  msgSend(){
    this.msg = true;
  }

  //addProducts(){
  //  this.productDataService.addProducts();
  //}
}
