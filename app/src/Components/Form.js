import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Input from "./Input";
import Button from "./Button";

import { SENTENCE_INPUT } from "../Constants/form";

// Initial values of the form inputs.
const initialValues = {
  [SENTENCE_INPUT.name]: SENTENCE_INPUT.initialValue
};

// Validation schema for the form inputs
const validationSchema = Yup.object().shape({
  [SENTENCE_INPUT.name]: SENTENCE_INPUT.validationSchema
});

function nonEnglishWordsText(words) {
  if(words.length === 0){
    return <span>Empty words</span>
  }
  return words.map((word, index) => (
    <React.Fragment key={word}>
      <span>{word}</span>
      {index !== words.length - 1 && <span>{", "}</span>}
    </React.Fragment>
  ));
}

export default function Form({ isLoading, output, resetOutput, onSubmit }) {
  // Setup form validation etc. using Formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (onSubmit) {
        onSubmit(values[SENTENCE_INPUT.name]);
      }
    }
  });
  return (
    <StyledForm onChange={resetOutput} onSubmit={formik.handleSubmit}>
      <Input
        name={SENTENCE_INPUT.name}
        type={SENTENCE_INPUT.type}
        placeholder={SENTENCE_INPUT.placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[SENTENCE_INPUT.name]}
        touched={formik.touched[SENTENCE_INPUT.name]}
        error={formik.errors[SENTENCE_INPUT.name]}
      />
      <StyledFormButtonWrapper>
        <div>
          <Button isLoading={isLoading} type="submit" testid="form-button">
            Check
          </Button>
        </div>
      </StyledFormButtonWrapper>
      <StyledFormOutputWrapper>
        {output.shouldShow && (
          <div>Non-English words: {nonEnglishWordsText(output.words)}</div>
        )}
      </StyledFormOutputWrapper>
    </StyledForm>
  );
}

// Form component
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
`;

// Wrapper component for the form button
const StyledFormButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

const StyledFormOutputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;
