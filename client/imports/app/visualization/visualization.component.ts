import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import template from "./visualization.component.html";
import style from "./visualization.component.scss";

@Component({
  selector: "visualization",
  template,
  styles: [ style ]
})
export class VisualizationComponent {
	msg: string;

  constructor() {
  	this.msg = "Hello this is visualization component";
  }
}