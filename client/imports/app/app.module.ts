import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { USERINPUT_DECLARATIONS } from "./user-input";
import { VisualizationComponent } from "./visualization/visualization.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    ...USERINPUT_DECLARATIONS,
    VisualizationComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
