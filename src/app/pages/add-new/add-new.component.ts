import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  formIn4 = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    img: new FormControl('',[
      Validators.required
    ]),
    price: new FormControl('', [
      Validators.pattern('[0-9]+')
    ]),
    salePrice: new FormControl('',[
      Validators.required,
      Validators.min(0),
    ]),
    description: new FormControl('',[
      Validators.required,
      Validators.minLength(20)
    ]),
  })
  listIn4:any = [];
  constructor(private actRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.getIn4();
  }
  getIn4(){
    let data:any = localStorage.getItem('listIn4');
    if(data == null || data == ''){
      this.listIn4 = [];
    }else{
      this.listIn4 = JSON.parse(data);
    }
  }
  submitForm(){
    if(this.formIn4.invalid){
      return
    }
    this.listIn4.push(this.formIn4.value);
    localStorage.setItem('listIn4',JSON.stringify(this.listIn4));
    this.router.navigate(['']);
  }
  get form():any{
    return this.formIn4.controls;
  }

}
