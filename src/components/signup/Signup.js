import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom';

import axios from "axios";

function RegisterUser(register) {
  const [data,setUser] = useState({
      first_name: "",
      last_name: "",
      user_name: "",
      password: "",
      county: "",
      neighbourhood_association: "",
})
const navigate = useNavigate()
useEffect(() =>{

})

const handlechange = (e) => {
      // console.log(data)
      const{name, value} = e.target
      setUser({
        ...data,
        [name]: value
      })
}
const submitForm = () => {
   const {first_name, last_name, user_name, password, county, neighbourhood_association} = data
   if(first_name && last_name && user_name && password && county && neighbourhood_association) {
    // console.log(data)
      axios.post("https://vast-wildwood-07594.herokuapp.com/resident/",data)
    .then(response =>{
      console.log(response);
      navigate('/sign-in')
    })
    .catch(err =>{
      console.log(err);
    })

   }
   else{
    console.log('hhhhh')
   }
}


  return (
    <div>
      {/* <Navbar /> */}
      <div className="container-fluid ps-md-0">
        <div className="row g-0 form-row">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Sign Up</h3>
                    <form onSubmit={submitForm}>
                      <div className="form-floating form-group mb-3">
                        <input type="text" className="form-control" id='firstName' placeholder="First name" 
                        value={data.first_name} name="first_name" onChange={handlechange} />
                          <label htmlFor="floatingInput">First Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='lastName' placeholder="Last name" 
                        value={data.last_name} name="last_name" onChange={handlechange} />
                          <label htmlFor="floatingInput">Last Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='userName' placeholder="User name"
                         value={data.user_name} name="user_name" onChange={handlechange} />
                          <label htmlFor="floatingInput">User Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='county' placeholder="County" 
                        value={data.county} name="county" onChange={handlechange} />
                          <label htmlFor="floatingInput">County</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id='neighbourhood' placeholder="Neighborhood" 
                        value={data.neighbourhood_association} name="neighbourhood_association" onChange={handlechange} />
                          <label htmlFor="floatingInput">Neighborhood</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id='password' placeholder="Password" 
                        value={data.password} name="password" onChange={handlechange} />
                          <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id='confirmPassword' placeholder="Confirm Password" 
                        value={data.password} name="password" onChange={handlechange} />
                          <label htmlFor="floatingPassword">Confrim Password</label>
                      </div>

                      {/* <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                          <label className="form-check-label" htmlFor="rememberPasswordCheck">
                            Remember password
                          </label>
                      </div> */}

                      <div className="d-grid">
                        <button name="action" className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" 
                        type="button" onClick={submitForm}>Sign in</button>
                        <div className="sing-in-text">
                            Already registered <a className="small" href="/sign-in">sign in?</a>
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
    </div>
      

  );
}
export default RegisterUser;




