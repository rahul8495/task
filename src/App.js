import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddProduct";
import EditContact from "./components/EditProduct";
import Home from "./components/home"
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Route exact path="/register" component={()=> <Register />} />
      <Route exact path="/" component={()=> <Login />} />
      <Route exact path="/dashboard" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact/>} />
    </div>
  );
};
export default App;
