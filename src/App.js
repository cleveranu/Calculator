import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const containerStyle = {
    // marginTop:"20rem",
    background: "linear-gradient(to right, #7ac07a, #b6b6dc)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
    border: "2px solid #cfcfcf", 
    borderRadius: "12px", 
  };

  const headingStyle = {
    color: "white",
    marginBottom: "20px",
  };

  const inputStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    width: "300px",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  };

  const buttonRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "15px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    color: "white",
    background: "#15468b",
  };

  const specialButtonStyle = {
    ...buttonStyle,
    background: "#881627",
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Calculator</h1>
      <input
        type="text"
        value={input}
        style={inputStyle}
        readOnly
      />
      <div style={buttonRowStyle}>
        <button style={buttonStyle} onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button style={specialButtonStyle} onClick={() => handleButtonClick("/")}>
          /
        </button>
      </div>
      <div style={buttonRowStyle}>
        <button style={buttonStyle} onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button style={specialButtonStyle} onClick={() => handleButtonClick("*")}>
          *
        </button>
      </div>
      <div style={buttonRowStyle}>
        <button style={buttonStyle} onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button style={specialButtonStyle} onClick={() => handleButtonClick("-")}>
          -
        </button>
      </div>
      <div style={buttonRowStyle}>
        <button style={buttonStyle} onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button style={buttonStyle} onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button style={buttonStyle} onClick={handleCalculate}>
          =
        </button>
        <button style={specialButtonStyle} onClick={() => handleButtonClick("+")}>
          +
        </button>
      </div>
      <div style={buttonRowStyle}>
        <button style={specialButtonStyle} onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
