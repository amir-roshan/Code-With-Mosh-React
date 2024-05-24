import { FieldValues, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod is a TypeScript-first schema declaration and validation library
// Schema defines the structure and constraints of data to ensure it meets certain criteria.

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name must not exceed 20 characters" }),
  year: z
    .number()
    .int()
    .positive()
    .min(1900, { message: "Year must be between 1900 and 2024" })
    .max(2024, { message: "Year must be between 1900 and 2024" }),
});

// using a type we can define the shape of an object
type FormData = z.infer<typeof schema>;

const FormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="year" className="form-label">
          Year
        </label>
        <input
          {...register("year", { valueAsNumber: true })}
          id="year"
          type="number"
          className="form-control"
        />
        {errors.year && <p className="text-danger">{errors.year.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormZod;
