import React from "react";
import { Status } from "./Whiskey";

export const AllSelected = "All";
function FilterSelector({ onChange, value: selectedValue }) {
  return (
    <select
      onChange={(event) => onChange(event.target.value)}
      value={selectedValue}
    >
      <option value={Status.HAVE}>Whiskeys I have</option>
      <option value={Status.WANT}>Whiskeys I want</option>
      <option value={Status.ARCHIVE}>Archived Whiskeys</option>
      <option value={AllSelected}>All Whiskeys</option>
    </select>
  );
}
export default FilterSelector;
