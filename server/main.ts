// import { Main } from "./imports/server-main/main";

// const mainInstance = new Main();
// mainInstance.start();

import { Meteor } from 'meteor/meteor';
 
import { loadCodeInputs } from './imports/fixtures/inputs';
 
Meteor.startup(() => {
  loadCodeInputs();
});