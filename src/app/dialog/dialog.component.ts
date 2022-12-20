import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  productform!: FormGroup;
  constructor(private fb:FormBuilder){
  }
  ngOnInit(): void {
    this.productform = this.fb.group({
      productName : ['',Validators.required],
      category:['',Validators.required],
      productdate:['',Validators.required],
      flist:['',Validators.required],
      price:['',Validators.required],
      list:['',Validators.required]
    })
  }
  
  Freshnesslist = ["Brand New","Second hand","Refurbished"];
  
}
