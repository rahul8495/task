import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {v4 as uuidv4} from 'uuid';

const AddPost = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.length < 2 || email.length > 128) {
      return toast.error("email length should be less than 128 or greater than 2");
    }

    if(password.length < 8){
        return toast.error("password is not correct")
    }
    
    // var loginToken = uuidv4();
    // localStorage.setItem("moveToken", loginToken);
    // console.log("token", loginToken)
    // toast.success("Contact added successfully!!");
    localStorage.setItem("useremail", email);
    localStorage.setItem("check", "yes");
    history.push(`/dashboard?token`);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-3">Login</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
           
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Login"
              />
            </div>
            <Link to="/register">
              don't have account ? Register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};


export default AddPost;
