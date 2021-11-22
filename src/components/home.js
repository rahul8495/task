import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {useHistory} from "react-router";
import Navbar from "./navbar"
const qs = require("query-string");

const Home = ( props ) => {
    const history = useHistory();

    useEffect(()=> {
        console.log("props", props);
        if(localStorage.getItem("check") !== "yes"){
            history.push("/")
        }
  },[])

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Product
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {props.products.length > 0 ? (
                props.products.map((product, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{Number(Math.round(parseFloat(product.price)+ 'e2')+ "e-2")}</td>
                    <td>
                      <Link
                        to={`/edit/${product.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => props.deleteProduct(product.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No products found</th>
                </tr>
              )}
            </tbody>
          </table>
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
  deleteProduct: (id) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
