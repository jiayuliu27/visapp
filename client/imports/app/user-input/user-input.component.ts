import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from "rxjs";

import { CodeInputs } from "../../../../both/collections/code-input.collection";

import template from "./user-input.component.html";
// import style from "./demo.component.scss";

@Component({
  selector: "user-input",
  template
})
export class UserInputComponent implements OnInit {
	msg: string;
	showInputForm: boolean;
	addInputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  	this.msg = "Hello this is user input component";
  	this.showInputForm = false;
  }

  ngOnInit() {
  	this.addInputForm = this.formBuilder.group({
  		varName: ['', Validators.required],
  		const: ['', Validators.required],
  		val: ['', Validators.required]
  	});
  }

  addInput(): void {
    // if (!Meteor.userId()) {
    //   alert('Please log in to add a party');
    //   return;
    // }

    if (this.addInputForm.valid) {
    	console.log("form is valid")
		CodeInputs.insert({
			varName: this.addInputForm.value.varName,
			const: this.addInputForm.value.const,
			val: this.addInputForm.value.val
		});

      // this.addInputForm.reset();
    }
  }

}