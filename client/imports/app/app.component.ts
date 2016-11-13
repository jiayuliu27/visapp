import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import template from "./app.component.html";
import style from "./app.component.scss";
import { CodeInputs } from '../../../both/collections/code-input.collection';
import { CodeInput } from '../../../both/models/code-input.model';

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
}
