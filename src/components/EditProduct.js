import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditProduct = ({ products, updateProduct }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  useEffect(() => {
    if(localStorage.getItem("check") !== "yes"){
      history.push("/")
  }
    setName(currentProduct.name);
    setDescription(currentProduct.description);
    setPrice(currentProduct.price);
  }, [currentProduct]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkProductExists = products.filter((product) =>
      product.name === name && product.id !== currentProduct.id
        ? product
        : null
    );

    if (!description || !name || !price) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkProductExists.length > 0) {
      return toast.error("This product already exists!!");
    }

    const data = {
      id: currentProduct.id,
      description,
      name,
      price,
    };

    updateProduct(data);
    toast.success("Product updated successfully!!");
    history.push("/dashboard");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/dashboard")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentProduct ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={description}
                  placeholder={"description"}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={price}
                  placeholder={"Price"}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary" >
                  Update Product
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/dashboard")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No product Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateProduct: (data) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
