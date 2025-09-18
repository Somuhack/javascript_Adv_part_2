import React, { useState } from "react";
import "../assets/css/hooksform.css";
import { useForm } from "react-hook-form";

const UsingReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit =  (data)=>console.log(data);
  

  return (
    //  <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

    //   <input {...register("firstName")} placeholder="First name" />
    //   <select {...register("category", { required: true })}>
    //     <option value="">Select...</option>
    //     <option value="A">Option A</option>
    //     <option value="B">Option B</option>
    //   </select>
    //   <textarea {...register("aboutYou")} placeholder="About you" />
    //   <p>{data}</p>
    //   <input type="submit" />
    // </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true },)} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span style={{color:"red"}}>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default UsingReactHookForm;
