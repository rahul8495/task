import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Navbar from "./navbar";

const AddProduct = ({ products, addProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const history = useHistory(); 

  useEffect(()=> {
    if(localStorage.getItem("check") !== "yes"){
        history.push("/")
    }
},[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkNameExists = products.filter((product) =>
      product.name === name ? product : null
    );

    if (!description || !name || !price) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkNameExists.length > 0) {
      return toast.error("This Product already exists!!");
    }

    const data = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 0,
      name,
      description,
      price,
    };

    addProduct(data);
    toast.success("Product added successfully!!");
    history.push("/dashboard");
  };

  return (
    <>
    <Navbar />
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Product</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => {
    dispatch({ type: "ADD_PRODUCT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
