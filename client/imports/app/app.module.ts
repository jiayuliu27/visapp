import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { InputComponent } from "./user-input/user-input.component";
// import { VisualizationComponent } from "./visualization/visualization.component";

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    InputComponent,
    // VisualizationComponent
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
    MaterialModule.forRoot()
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
