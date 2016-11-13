import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from "rxjs";

import { CodeInputs } from "../../../../both/collections/code-input.collection";
import { CodeInput } from "../../../../both/models/code-input.model";

import template from "./user-input.component.html";
// import style from "./demo.component.scss";

@Component({
  selector: "user-input",
  template
})
export class UserInputComponent implements OnInit {
	showInputForm: boolean;
	addInputForm: FormGroup;
  showEditForm: boolean;
  addEditForm: FormGroup;
  inputs: Observable<CodeInput[]>;
  codeInput: CodeInput;

  constructor(private formBuilder: FormBuilder) {
  	this.showInputForm = false;
    this.showEditForm = false;
    // this.inputs = CodeInputs.find({}).zone();
  }

  ngOnInit() {
  	this.addInputForm = this.formBuilder.group({
  		varName: ['', Validators.required],
  		const: ['', Validators.required],
  		val: [undefined]
  	});

    this.addEditForm = this.formBuilder.group({
      varName: ['', Validators.required],
      val: ['', Validators.required]
    })
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
    console.log(CodeInputs.find({}).zone());
      // this.addInputForm.reset();
      this.showInputForm = false;
    }
  }

  editInput(): void {
    if(this.addEditForm.valid) {
      console.log("edit input not yet implemented");
      this.showEditForm = false;
    }
  }

  saveInput() {
    this.codeInput = CodeInputs.findOne({
      varName: this.addEditForm.value.varName
    });

    CodeInputs.update(this.codeInput._id, {
      $set: {
        varName: this.codeInput.varName,
        const: this.codeInput.const,
        val: this.codeInput.val
      }
    });
  }

}