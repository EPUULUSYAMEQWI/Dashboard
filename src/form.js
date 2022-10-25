import "./form.css"
import React ,{useState} from "react"
import pic from "./cat.png"

function Form() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   
    
    const handleSubmit= () =>{
        const data={
            email:email,
            password:password,
        }
        alert(JSON.stringify(data))
        
    }


   
    return (
    <form className="container" onSubmit={handleSubmit} >  
       
        <div className="head">
        <p><span>Eddieshop</span></p>
        <div className="sign">
         <p>Don't have an account :</p>
         <p type="submit" className="signup"><span>SignUp</span></p>  
        </div>
         </div>
        <div className="names">
         <h1>Welcome Back</h1>
        <label>Email</label><br></br>

        <input type="email" name="email" placeholder= "name"size="20"  required value ={email}
        onChange={(e)=>{setEmail(e.target.value)}}/>
        
        <br></br>
        <label>Password</label><br></br>
        <input type="password" name="password" placeholder= "password" size="30"  required value={password}
        onChange={(e)=>{setPassword(e.target.value)}} /> 
        
        <div className="box">
        <input type="checkbox" id="" name="" value=""/>
    
        <label >Keep me logged in</label>    
        <label className="forget">Forgot password?</label>
        
        </div>
        <button type="submition" className="login">Login</button>    
        </div>
         <p className="logo">Or</p>
        <div className="icons">
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-google" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>

         </div>
         <img alt="" className="image" src={pic}></img>
         {/* <p className="font">FONT</p> */}
         {/* <p className="fonts">FONT</p> */}

         
         </form>

                
                

    );
    
}
// <p className="font">FONT</p>



export default Form