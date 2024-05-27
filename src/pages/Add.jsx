import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';


export const Add = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) =>
 axios.post('http://localhost:3000/api/',data).then(
    res=>console.log(res.data)
 )


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label >Name:<input {...register("name")} /></label>


    <label> Price: <input {...register("price", { required: true })} /></label>
      {errors.exampleRequired && <span>This field is required</span>}


      <button type="submit" >Add Item</button>
    </form>
  )

}

export default Add

