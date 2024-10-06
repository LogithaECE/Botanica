import React from "react";
import { Layout } from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <section>
        <div className="d-inline-block" style={{ width: "200vh" }}>
          <div className="container-fluid mt-3 flex-grow-1">
            <div className="row">
              <div
                className="col-md-3 p-0"
                style={{ backgroundColor: "white", minHeight: "100%" }}
              >
                <AdminMenu />
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
                      {auth?.user?.name}
                    </h1>
                    <p className="mb-2">
                      <strong>Admin Email:</strong> {auth?.user?.email}
                    </p>
                    <p className="mb-2">
                      <strong>Admin Contact:</strong> {auth?.user?.phone}
                    </p>
                    <p>
                      <strong>Admin Address:</strong> {auth?.user?.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
