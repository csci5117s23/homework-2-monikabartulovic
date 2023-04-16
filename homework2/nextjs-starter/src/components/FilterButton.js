import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">{props.id}</span>
    </button>
  );
}

export default FilterButton;
