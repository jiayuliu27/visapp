import { CollectionObject } from './collection-object.model';

export interface CodeInput extends CollectionObject {
  varName: string;
  val: number;
  const: string;
}