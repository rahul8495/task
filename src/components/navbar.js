import React from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router";

const Navbar = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("check");
        history.push("/")
    }

  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          {localStorage.getItem("useremail")}
        </Link>
        <Link onClick={handleLogout} className="btn btn-outline-light my-2 ml-auto ">
          Logout
        </Link>
        {/* <button onClick={handleLogout} className="navbar-brand ml-10">Logout </button> */}
      </nav>
    </div>
  );
};

export default Navbar;
