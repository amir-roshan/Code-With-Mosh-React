import React, { useState } from "react";

const FormUseState = () => {
  // we need to use onChange event to update the state
  // we need to use value attribute to display the state
  // value attribute is used to create a controlled component
  // ChnageEvent is a generic type for the event object.
  const [person, setPerson] = useState({ name: "", year: 0 });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, year: parseInt(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={handleName}
          value={person.name} // controlled component
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Year
        </label>
        <input
          onChange={handleYear}
          value={person.year} // controlled component
          id="name"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUseState;
