import React from "react";

const ExpRow = ({ exp }) => {
  return (
    <tr>
      <td>{exp?.company}</td>
      <td class="hide-sm">{exp?.title}</td>
      <td class="hide-sm">
        {exp?.from} - {exp?.to}
      </td>
      <td>
        <button class="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ExpRow;
