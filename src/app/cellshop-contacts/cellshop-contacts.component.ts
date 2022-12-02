import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-cellshop-contacts',
  templateUrl: './cellshop-contacts.component.html',
  styleUrls: ['./cellshop-contacts.component.scss']
})
export class CellshopContactsComponent {
  form!: FormGroup;
  msg = false;
  error = false;
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
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }

  addContacts(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      this.productDataService.addContacts(this.form);
      this.form.reset();
    } else {
      this.msg = false;
      this.error = true;
    }
  }

  msgSend(){
    this.msg = true;
    setTimeout(() => {
      this.msg = false;
    }, 10000);
  }
}
