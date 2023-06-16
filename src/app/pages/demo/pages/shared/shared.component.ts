import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validator, Validators} from '@angular/forms';
import { regex, regexErrors } from '@app/shared/utils';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form:FormGroup = Object.assign({});
  isInline:boolean;
  regexErrors = regexErrors;
  constructor(private fb:FormBuilder){
    this.isInline = true;
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      input:[null,{
        updatedOn:'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.numbers)        
        ]
      }]
    });
  }

  onPatchValue(){
    this.form.patchValue({input: 'test'});
  }
  onSubmit(){
    console.log('Submit!');
  }
  onToggleInline(){
    this.isInline = !this.isInline;
    console.log('this.isInline: ', this.isInline);
  }

}
