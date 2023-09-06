import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  const { login } = useSelector((s) => s.user);
  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);

  return <Component />;
};

export default PrivateRoute;
