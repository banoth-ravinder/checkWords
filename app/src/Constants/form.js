/* 
We define the properties for the different form inputs here.
*/
import * as Yup from "yup";

export const SENTENCE_INPUT = {
  name: "sentence_field",
  label: "",
  type: "text",
  placeholder: "Type in your sentence",
  initialValue: "",
  validationSchema: Yup.string().required("Required")
};
