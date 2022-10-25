import './Login.css'
import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

import axios from "axios";
  
function LoginUser() {
  const [data,setUser] = useState({
    user_name: "",
    password: "",

  })
  const navigate = useNavigate()
  useEffect(() =>{
  
  })
  const handlechange = (e) => {
    console.log(data)
    const{name, value} = e.target
    setUser({
      ...data,
      [name]: value
    })
}
const submitForm = () => {
 const {user_name, password} = data
 if(user_name && password) {
  console.log(data)
    axios.post("https://vast-wildwood-07594.herokuapp.com/resident/",data)
  .then(res =>{
    console.log(res);
    navigate('/log-in')
  })
  .catch(err =>{
    console.log(err);
  })

 }
//  else{
//   console.log('hhhhh')
//  }
}

  return (
    <>
    {/* <Navbar /> */}
      <div className="container-fluid ps-md-0">
        <div className="row g-0 form-row-login">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Login</h3>
                    <form>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" 
                        placeholder="Username" name='user_name' onChange={handlechange} />
                        <label for="floatingInput">Username</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" name='password' className="form-control" id="floatingPassword" 
                        placeholder="Password" onChange={handlechange} />
                        <label for="floatingPassword">Password</label>
                      </div>

                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                        <label className="form-check-label" for="rememberPasswordCheck">
                          Remember password
                        </label>
                      </div>

                      <div className="d-grid">
                        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" onClick={submitForm}
                        type="button">Sign in</button>
                        <div className="text-center">
                          <a className="small" href="#">Forgot password?</a>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
};
export default LoginUser;
