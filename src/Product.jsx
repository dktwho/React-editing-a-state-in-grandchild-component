import React from "react";
import ProductFiled from "./ProductFiled";

const Product = ({ id, name, cost, isEdit, toggleMode, editProd }) => {
  return (
    <p>
      Name:
      <ProductFiled
        id={id}
        text={name}
        type="name"
        editProd={editProd}
        isEdit={isEdit}
      />
      <ProductFiled
        id={id}
        text={cost}
        type="cost"
        editProd={editProd}
        isEdit={isEdit}
      />
      <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
    </p>
  );
};

export default Product;
