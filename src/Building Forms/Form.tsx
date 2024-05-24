import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

z.object({});

interface FormData {
  name: string;
  year: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, maxLength: 20, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">This field is required</p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="text-danger">Max length is 20 characters</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Min length is 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="year" className="form-label">
          Year
        </label>
        <input
          {...register("year")}
          id="year"
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

export default Form;
