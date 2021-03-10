import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <form onSubmit={onSave}>
      <h3>{product.id ? "Güncelle" : "Ekle"}</h3>

      <TextInput
        name="productName"
        value={product.productName}
        label="Product Name"
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        value={product.categoryId || ""}
        label="Category"
        defaultOption="Seçiniz"
        options={categories.map(category =>({
            value: category.id,
            text: category.categoryName
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />
      <TextInput
        name="unitPrice"
        value={product.unitPrice}
        label="Unit Price"
        onChange={onChange}
        error={errors.unitPrice}
      />
      <TextInput
        name="quantityPerUnit"
        value={product.quantityPerUnit}
        label="Quantity Per Unit"
        onChange={onChange}
        error={errors.quantityPerUnit}
      />
      <TextInput
        name="unitsInStock"
        value={product.unitsInStock}
        label="Units In Stock"
        onChange={onChange}
        error={errors.unitsInStock}
      />
      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
