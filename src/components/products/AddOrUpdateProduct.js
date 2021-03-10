import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

//React-Hooks
function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  //Syntax
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});

  // eger bu sayfaya bir link uzerinden gelinmisse categories'ler bos gelecegi icin useEffect'i kullaniyoruz
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product }); //product nesnesini setProduct'a set ettik
  }, [props.product]); //Burada sonsuz dengeye girmemesi icin props.product yerlestigi zaman calismayi keser useEffect

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(value);
  }

  //Validasyon - Hata islemleri
  function validate(value) {
    if (value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Ürün ismi gereklidir",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onSave={handleSave}
      onChange={handleChange}
      errors={errors}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId); //ProductId state de string sekilde kayitli oldugu icin == aldim
  return product;
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
