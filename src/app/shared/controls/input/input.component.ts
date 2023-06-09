import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi:true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder:string = '';
  @Output() changed = new EventEmitter<string>();
  value:string = '';
  isDisabled:boolean = false;

  constructor(){

  }

  private propagageChange: any = () =>{};
  private propagageTouched: any = () =>{};

  ngOnInit(): void {
    
  }
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.propagageChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagageTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  onKeyup(value:string): void{
    this.value = value;
    this.propagageChange(value);
    this.changed.emit(value);
  }
  onBlur():void{
    this.propagageTouched();
  }
}
