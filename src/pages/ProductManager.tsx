import React from "react";
import { Link } from "react-router-dom";
import { ProductTye } from "../types/product";
import { Table, Tag, Space } from "antd";

type ProductManagerProps = {
  products: ProductTye[];
  onRemove: (id: number) => void;
};
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

const ProductManager = (props: ProductManagerProps) => {
  const dataSource = props.products.map((item, index) => {
    return {
      key: index + 1,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      status: item.status,
    };
  });
  return <Table columns={columns} dataSource={dataSource} />;
};

export default ProductManager;
