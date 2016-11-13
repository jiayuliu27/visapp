import { MongoObservable } from "meteor-rxjs";
import { CodeInput } from "../models/code-input.model";

export const CodeInputs = new MongoObservable.Collection<CodeInput>("inputs");