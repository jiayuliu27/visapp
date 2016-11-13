import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, Subject } from "rxjs";
import { MeteorObservable } from "meteor-rxjs";

import { CodeInput } from "../../../../both/models/code-input.model";
import { CodeInputs } from "../../../../both/collections/code-input.collection";
import template from './input-list.component.html';
 
@Component({
  selector: 'input-list',
  template
})
export class InputListComponent {
  codeInputs: Observable<CodeInput[]>;
  codeInputsSub: Subscription;
  codeInputsSize: number = 0;
  constructor() {

  }
  ngOnInit() {

  }
  removeUserInput(codeInput: CodeInput): void {
    CodeInputs.remove(codeInput._id);
  }
  ngOnDestroy() {
    this.codeInputsSub.unsubscribe();
  }
}
