import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../api/product";
import { ProductTye } from "../types/product";

type ProductEditProps = {
  onUpdate: (product: ProductTye) => void;
};
type FormInputs = {
  name: string;
  price: string;
  quantity: number;
  status: number;
};
const ProductEdit = (props: ProductEditProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data);
    };
    getProduct();
  }, []);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    props.onUpdate(data);
    navigate("/admin/products");
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name", { required: true })} />
      <input type="text" {...register("price")} />
      <input type="number" {...register("quantity")} />
      <select id="" {...register("status")}>
        <option value="1">Còn Hàng</option>
        <option value="2">Hết Hàng</option>
      </select>
      <button>Update</button>
    </form>
  );
};

export default ProductEdit;
