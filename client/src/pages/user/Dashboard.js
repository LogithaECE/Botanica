import React from "react";
import { Layout } from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Botanica"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
          <div
                  className="card shadow-sm border-0 rounded-lg"
                  style={{ backgroundColor: "rgba(255, 253, 253, 0.9)" }}
                >
                  <div className="card-body">
                    <h1
                      className="mb-4"
                      style={{ color: "#042e04", fontWeight: "800" }}
                    >
                      Hello, {auth?.user?.name} !
                    </h1>
                    <p className="mb-2">
                      <strong>Email:</strong> {auth?.user?.email}
                    </p>
                    <p className="mb-2">
                      <strong>Contact:</strong> {auth?.user?.phone}
                    </p>
                    <p>
                      <strong>Address:</strong> {auth?.user?.address}
                    </p>
                  </div>
                  </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
