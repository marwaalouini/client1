import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
             <div className="col-md-6 form-banner ">
            <img src="https://images.pexels.com/photos/5407210/pexels-photo-5407210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="registerImage" />
          </div>

          <div className="col-md-6 form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;