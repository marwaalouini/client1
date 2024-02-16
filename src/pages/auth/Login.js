import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import "../../style/Login.css"

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  
  return (
    <>
      {error && <span className="error-message">{error}</span>}
      {loading ? (
        <Spinner />
      ) : (

        
        <div className="row g-0"> 

   
          <div className="col-md-8 form-banner">
            <img src="https://images.pexels.com/photos/5407235/pexels-photo-5407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>

          <div>
        
          <section id="sec">
  <ul>
    <li>
      <span className="fa-solid fa-droplet" style={{color: "#ff0000",}} />
      
      <h3>First Time Donors</h3>
      <p>
      Find out if you are eligible to donate, get answers to your FAQs , schedule an appointment and more .
      </p>
    </li>
    <li>   
         <span className="fa-solid fa-hand-holding-droplet" style={{color: "#ff0000",}} />

      <h3>For Returning Donors</h3>
      <p>
       Login to our Donor portal to see results from your previous donation, schedule a new ...
      </p>
     
    </li>
    <li>
    <span className="fa-solid fa-truck-droplet" style={{color: "#ff0000",}} />

      <h3>Host Blood Drive</h3>
      <p>
       Hosting your own blood drive is a wonderfil way to support the public health of your community .learn ...
      </p>
    
    </li>
  </ul>
</section>

          </div>
        </div>
      )}
    </>
  );
};

export default Login;
