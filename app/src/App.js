import React, { useState } from "react";
import axios from "axios";
import querystring from "querystring";
import styled from "styled-components";

import Form from "./Components/Form";

import "./styles.css";

function App() {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [formOutput, setFormOutput] = useState({
    words: [],
    shouldShow: false
  });

  const onFormSubmit = async (value) => {
    try {
      setIsFormLoading(true);
      // call API
      const query = querystring.stringify({ sentence: value })
      

      const response = await axios.get(`${process.env.REACT_APP_EC2_ADDRESS}/sentence/check?${query}`);
      console.log(response.data);

      setFormOutput({ words: response.data, shouldShow: true });
    } catch (e) {
      // Show error toast or something similar.
    } finally {
      setIsFormLoading(false);
    }
  };

  const resetFormOutput = () => {
    setFormOutput({ words: [], shouldShow: false });
  };

  return (
    <div className="App">
      <StyledDiv>
        <Form
          isLoading={isFormLoading}
          output={formOutput}
          resetOutput={resetFormOutput}
          onSubmit={onFormSubmit}
        />
      </StyledDiv>
    </div>
  );
}

// Card component
const StyledDiv = styled.div`
  width: min(100vw, 400px);
`;

export default App;
