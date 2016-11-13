import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
 
import { CodeInputs } from '../../../../both/collections/code-input.collection';
import { CodeInput } from '../../../../both/models/code-input.model';
 
import template from './input-list.component.html';
 
@Component({
  selector: 'input-list',
  template
})
export class InputListComponent {
  inputs: Observable<CodeInput[]>;
 
  constructor() {
    this.inputs = CodeInputs.find({}).zone();
    console.log(this.inputs);
  }
 
  removeInput(input: CodeInput): void {
    CodeInputs.remove(input._id);
  }
}