import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type InputForm = {
  username: string;
  phonenumber: string;
  password: string;
};
type SignUpProps = {
  username: String;
  phonenumber: String;
  password: String;
  onAdd: (user: InputForm) => void;
};

const signup = (props: SignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    props.onAdd(data);
    navigate("/signin");
  };
  return (
    <div>
      <h1>
        <p>SIGN IN</p>
      </h1>
      <form action="">
        <div className="">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Username..."
            {...register("username", { required: true })}
          />
        </div>
        <div className="">
          <label htmlFor="">Password</label>
          <input type="text" name="" id="" />
        </div>
        <div className="">
          <label htmlFor="">PhoneNumber</label>
          <input type="text" name="" id="" />
        </div>
      </form>
    </div>
  );
};

export default signup;
