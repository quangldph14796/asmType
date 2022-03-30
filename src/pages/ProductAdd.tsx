import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ProductAddProps = {
  name: string;
  onAdd: (product: TypeInputs) => void;
};
type TypeInputs = {
  name: string;
  price: string;
  quantity: number;
  status: number;
};

const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    props.onAdd(data);
    navigate("/admin/products");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.name}
      <input type="text" placeholder="Tên sản phẩm" {...register("name")} />
      <input type="text" placeholder="Giá sản phẩm" {...register("price")} />
      <input type="number" placeholder="Số lượng" {...register("quantity")} />
      <select id="" {...register("status")}>
        <option value="1">Còn Hàng</option>
        <option value="2">Hết Hàng</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default ProductAdd;
