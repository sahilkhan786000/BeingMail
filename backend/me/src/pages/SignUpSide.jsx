import React, { useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import LoginOauth from '../googleOauth/LoginOauth'

export default function SignUpSide() {

  
  
    const [credentials, setcredentials] = useState({
        firstname: "",
        lastname:"",
        email: "",
        password: "sahil",
      
      });

      const navigate = useNavigate();

 

  
  const handleSubmit = async (e) => {
    
    e.preventDefault(); // Synthetic event(Interview)
    console.log(JSON.stringify({
        firstname: credentials.firstname,
        lastname:credentials.lastname,
        email: credentials.email,
        password: credentials.password
      }))
    const response = await fetch("https://beingmail.onrender.com/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: credentials.firstname,
        lastname:credentials.lastname,
        email: credentials.email,
        password: credentials.password
      })
      
    });
  

    const jsn2 = await response.json()
    console.log(jsn2);

    if (!jsn2.success) {
      alert("Enter valid Credentials")
    }

    if(jsn2.success){
      navigate("/main");
    }

  }

  const onChange = (event) => {
    setcredentials({...credentials, [event.target.name]: event.target.value });
  }





  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={credentials.name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              value={credentials.name}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/" className="m-3 btn btn-danger">
            {" "}
            Already a user
          </Link>

         

       <LoginOauth/>
        </form>
      </div>
    </>
  );
}
