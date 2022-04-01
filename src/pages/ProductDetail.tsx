import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read } from "../api/product";
import { ProductTye } from "../types/product";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductTye>();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);
  return (
    <div>{product?.name}</div>
  );
};

export default ProductDetail;
