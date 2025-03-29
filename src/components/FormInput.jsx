import React from "react";

function FormInput({ label, type, name }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type={type}
        className="input w-full"
        placeholder="Type here"
        name={name}
      />
    </fieldset>
  );
}

export default FormInput;
