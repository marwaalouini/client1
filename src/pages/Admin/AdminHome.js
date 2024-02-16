import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
         
         Welcome to the Admin page of the
        Blood Bank App! Here, you can manage all 
        aspects of the blood bank's operations. 
        From adding and updating donor 
        information to tracking inventory levels and distributing blood to hospitals,
        this dashboard is your central hub for ensuring the smooth functioning of the
        blood bank. With real-time analytics and comprehensive reporting tools, you can 
       make informed decisions that will save lives. Thank you for your dedication to 
        this life-saving cause.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;