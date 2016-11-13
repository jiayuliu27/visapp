import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import template from "./user-input.component.html";
// import style from "./demo.component.scss";

@Component({
  selector: "user-input",
  template
})
export class InputComponent {
	msg: string;

  constructor() {
  	this.msg = "Hello this is user input component";
  }

}
