import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fp.css"

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    console.log(OTP);
    if (OTP === OTP) {
      console.log("Good");
    }
    navigate("/otp");
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let history = useNavigate();
  const handleClick = async () => {
    alert("OTP Send Successfully.");
    history("/otp");
    await delay(10);
    // Here you have to pass the route where you want to redirect
  };

  return (
    <>
    <form className="container">
    <h1 className="name_login"> Forget Password</h1>
  <div class="mb-3 col-lg-4" >
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={email} class="form-control"
    onChange={(e) => {setEmail(e.target.value);}}
     id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>

  <button  type="submit"  class="btn btn-primary col-lg-4"
  onClick={() => {handleSubmit();handleClick();}}>Send OTP</button>
</form>     
    </>
  );
}

export default ForgetPassword;