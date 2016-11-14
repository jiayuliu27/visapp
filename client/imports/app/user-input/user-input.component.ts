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
  runningFactorial: boolean;
  step: number;
  steps: any[];
  inputs: Observable<CodeInput[]>;
  codeInput: CodeInput;

  constructor(private formBuilder: FormBuilder) {
  	this.showInputForm = false;
    this.showEditForm = false;
    this.runningFactorial = false;
    this.step = 0;
    this.steps = [
      { const: "function", val: "factorial(5)" },
      { const: "let", varName: "n", val: 5},
      { const: "function", val: "factorial(4)" },
      { const: "let", varName: "n", val: 4},
      { const: "function", val: "factorial(3)" },
      { const: "let", varName: "n", val: 3},
      { const: "function", val: "factorial(2)" },
      { const: "let", varName: "n", val: 2},
      { const: "function", val: "factorial(1)" },
      { const: "let", varName: "n", val: 1}
    ];
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
    	console.log("form is valid");
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

      this.showEditForm = false;

      this.codeInput = CodeInputs.findOne({
        varName: this.addEditForm.value.varName
      });

      console.log(this.codeInput);

      if(this.codeInput.const !== "const") {
        CodeInputs.update(this.codeInput._id, {
          $set: {
            val: this.addEditForm.value.val
          }
        });
      } else {
        console.log('var type is const show error modal');
      }
    } else {
      console.log('form is invalid show error modal');
    }
  }

  factorial(): void {
    let step = this.steps[this.step++]
    CodeInputs.insert(step);
  }

  runFactorial(): void {
    this.runningFactorial = true;
    this.factorial();
  }
  

}