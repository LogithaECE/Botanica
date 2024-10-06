import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="list-group">
        <h4 className="mb-4" style={{ fontWeight: "700", color: "black" }}>
          Admin Panel
        </h4>
        <NavLink
          to="/dashboard/admin/add-category"
          className="list-group-item list-group-item-action"
        >
          Add Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/add-plant"
          className="list-group-item list-group-item-action"
        >
          Add Plant
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action"
        >
          Plants
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action"
        >
          Access User Profiles
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
