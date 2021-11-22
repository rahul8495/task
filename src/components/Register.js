import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddPost = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.length < 2 || name.length > 128) {
      return toast.error("email length should be less than 128 or greater than 2");
    }

    if(email.length >128){
        return toast.error("email should be less than 128 character")
    }

    if(password.length < 8 || password.length >72){
        return toast.error("password should be more than 8 or less than 72 character")
    }

    if(password !== rePassword){
        return toast.error("password and repassword should be same");
    }


    
    localStorage.setItem("useremail", email);
    localStorage.setItem("check", "yes");
    history.push(`/`);
    toast.success("signup successfully");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-3">Signup</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form onSubmit={handleSubmit}>
           
            <div className="form-group">
              <input
                className="form-control"
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                className="form-control"
                type="password"
                placeholder="password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Signup"
              />
            </div>
          </form>
          <Link to="/">
            already have an account
        </Link>
        </div>
      </div>
    </div>
  );
};


export default AddPost;
