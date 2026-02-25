import React from "react";
import ExpRow from "./ExpRow";

const Experience = ({ exps = [] }) => {
  return (
    <>
      {" "}
      <h2 class="my-2">Experience Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Title</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {exps.length > 0 ? (
            exps.map((exp) => <ExpRow key={exp._id} exp={exp} />)
          ) : (
            <h4>No experience credentials</h4>
          )}
          <ExpRow />
        </tbody>
      </table>
    </>
  );
};

export default Experience;
