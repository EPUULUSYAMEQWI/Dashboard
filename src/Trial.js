import "./Form.css"
import pic from "./fardosa.jpeg"
import React,{useEffect, useState} from 'react';
import User from "./user";
function Trial(){
  const[email , setEmail]=useState("");
  const [password,setpassword]=useState("");
  const[changeColor,setChangeColor]=useState(false);
  const hundleSubmit=()=>{
    setChangeColor(!changeColor);
    const data={
        email:email,
        password:password
    }
    alert(JSON.stringify(data))
  }
    return (
        <form className="container" onSubmit={hundleSubmit}>
        <div className="top">
        <p><span>FardosaShop</span></p>
        <div className="sign">
         <p>Don't have an account :</p>
         <p type="submit" className="signup"><span>SignUp</span></p>
        </div>
         </div>
        <div className="all">
         <h1>Welcome Back</h1>
        <label>Email</label><br></br>
        <input type="email" name="email" placeholder= "name@domain.com"size="30" value={email}  onChange={(e)=>{setEmail(e.target.value)}} required />
        <br></br>
        <label>Password</label><br></br>
        <input type="password" name="password" placeholder= "atleast 8 characters " size="30" value={password} onChange={(e)=>{setpassword(e.target.values)}} required/>
        <div className="check">
        <input type="checkbox" id="" name="in" value="in"/>
        <label >Keep me logged in</label>
        <label className="forgot">Forgot password?</label>
        </div>
        <button onclick={hundleSubmit}
        className={changeColor ? 'change ' : 'login '} type="submit">{changeColor ? 'Login':'Login'}
         </button>
        </div>
         <p className="p1">Or</p>
        <div className="icons">
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-google" aria-hidden="true"></i>
         <i class="fa fa-instagram" aria-hidden="true"></i>
         </div>
         <img alt="" className="pic" src={pic}></img>
         <User/>
                </form>
    );
}
export default Trial;