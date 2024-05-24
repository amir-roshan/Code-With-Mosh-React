import { useRef, useState } from "react";

const FormUseRef = () => {
  // we reference null
  // use the HTML input element type for useRef
  // use the ref attribute to pass the useRef there
  const nameRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const [person, setPerson] = useState({ name: "", year: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPerson({
      name: nameRef.current!.value,
      year: parseInt(yearRef.current!.value),
    });
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Year
        </label>
        <input ref={yearRef} id="name" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUseRef;
