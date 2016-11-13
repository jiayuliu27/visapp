import { CodeInputs } from '../../../both/collections/code-input.collection';
import { CodeInput } from '../../../both/models/code-input.model';
 
export function loadCodeInputs() {
  if (CodeInputs.find().cursor.count() === 0) {
    const codeInputs: CodeInput[] = [{
      varName: 'temperature',
      val: -10,
      const: 'const'
    }, {
      varName: 'order',
      val: 1,
      const: 'const'
    }, {
      varName: 'days',
      val: 123,
      const: 'let'
    }];
 
    codeInputs.forEach((codeInput) => CodeInputs.insert(codeInput));
  }
}