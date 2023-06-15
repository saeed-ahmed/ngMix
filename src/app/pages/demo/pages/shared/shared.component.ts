import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validator} from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form:FormGroup = Object.assign({});
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      input:[null]
    });
  }

  onPatchValue(){
    this.form.patchValue({input: 'test'});
  }
  onSubmit(){
    console.log('Submit!');
  }

}
