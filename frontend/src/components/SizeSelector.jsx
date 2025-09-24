import React, { useState } from "react";

const SizeSelector = (props) => {

  const handleChange = (event) => {
    props.setSize(event.target.value);
  };

  const handleReset = () => {
    props.setSize("");
  };

  return (
    <div className="w-full flex flex-col">
      <label htmlFor="">
        Size<span>: </span>
      </label>
      <select
        className="border border-gray-300 rounded-full py-1.5 px-3.5 mt-2 w-full max-w-[50%] text-sm"
        value={props.size}
        onChange={handleChange}
      > 
        <option value="">Choose an option</option>
        <option value="us-6-eu-39-uk-5-5">US 6 / EU 39 / UK 5.5</option>
        <option value="us-7-eu-40-uk-6-5">US 7 / EU 40 / UK 6.5</option>
        <option value="us-8-eu-41-uk-7-5">US 8 / EU 41 / UK 7.5</option>
        <option value="us-9-eu-42-uk-8-5">US 9 / EU 42 / UK 8.5</option>
        <option value="us-10-eu-43-uk-9-5">US 10 / EU 43 / UK 9.5</option>
        <option value="us-11-eu-44-uk-10-5">US 11 / EU 44 / UK 10.5</option>
        <option value="us-12-eu-45-uk-11-5">US 12 / EU 45 / UK 11.5</option>
        <option value="us-13-eu-46-uk-12-5">US 13 / EU 46 / UK 12.5</option>
      </select>
      <div
        className="border border-gray-300 px-2 py-.5 w-fit rounded mt-3"
        style={{ visibility: props.size ? "visible" : "hidden" }}
      >
        <a onClick={handleReset}>Clear</a>
      </div>
    </div>
  );
};

export default SizeSelector;
