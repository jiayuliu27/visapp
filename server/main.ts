import { Meteor } from 'meteor/meteor';
 
import { loadCodeInputs } from './imports/fixtures/inputs';
 
Meteor.startup(() => {
  loadCodeInputs();
});