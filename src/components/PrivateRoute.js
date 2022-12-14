import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthProvider";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <>
      <Routes>
        <Route
          {...rest}
          render={(props) => {
            return currentUser ? <Component {...props} /> : <Navigate to="/" />;
          }}
        ></Route>
      </Routes>
    </>
  );
}
