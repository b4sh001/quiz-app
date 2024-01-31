import React from "react";

export default function Questions({ question }) {
  console.log(question);
  return (
    <div className="options">
      <h4>{question.question}</h4>
      {question.options.map((option) => (
        <button className="btn btn-option">{option}</button>
      ))}
    </div>
  );
}
