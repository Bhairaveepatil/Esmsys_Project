import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import ForgetPassword from "./ForgetPassword";

function NewSubmit() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        // console.log(otp, password);
        // axios
        //     .post("http://localhost:5000/otp", {
        //         otp: otp,
        //         password: password,
        //     })
        //     .then((res) => {
        //         if (ForgetPassword.OTP === setOtp()) {
        //             console.log("1122");
        //         }
        //         console.log(res.data);
        //         if (res.data.code === 200) {
        //             navigate("/signin");
        //             alert("Password Updated.");
        //         } else {
        //             alert("server err / wrong OTP");
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        alert("Password Updated.");
        navigate("/login")
    };

    return (
        <>
        <form>
            <div className="container">
 <h2 className="name_login">Forget password</h2>
  <div class="otp_bar col-lg-4 mb-3">
    <label for="forotp" class="form-label">OTP</label>
    <input  value={otp}
    onChange={(e) => {setOtp(e.target.value);}}
    type="number" class="form-control" id="forotp" aria-describedby="otphelp"/>
    </div>

    <div class="new_pass col-lg-4 mb-3">
    <label for="password" class="form-label">New Password</label>
    <input  value={password}
    onChange={(e) => { setPassword(e.target.value);}}
    type="text" class="form-control" id="forotp" aria-describedby="otphelp"/>
    </div>
  
  
  <button onClick={handleSubmit} type="submit" class="btn btn-primary col-lg-4">Change Password</button>
  </div>  
</form>       
   
        </>
    );
}

export default NewSubmit;
