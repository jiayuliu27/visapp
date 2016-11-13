import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { CodeInputs } from "../../../../both/collections/code-input.collection";
import { CodeInput } from "../../../../both/models/code-input.model";

import template from "./visualization.component.html";
import style from "./visualization.component.scss";

@Component({
  selector: "visualization",
  template,
  styles: [ style ]
})
export class VisualizationComponent {
	inputs: Observable<CodeInput[]>;

  constructor() {
  	this.inputs = CodeInputs.find({}).zone();
  }
}