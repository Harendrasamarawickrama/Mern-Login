// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function RefreshHandler(setIsAuthenticated) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setIsAuthenticated(true);
//       if (
//         location.pathname === "/" ||
//         location.pathname === "/login" ||
//         location.pathname === "/signup"
//       ) {
//         navigate("/home", { replace: false });
//       }
//     }
//   }, [location, navigate, setIsAuthenticated]);
//   return null;
// }

// export default RefreshHandler;

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandler({ setIsAuthenticated }) { // Destructure props properly
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      if (["/", "/login", "/signup"].includes(location.pathname)) {
        navigate("/home", { replace: true }); // Changed to replace:true to prevent back navigation
      }
    }
  }, [location.pathname, navigate, setIsAuthenticated]); // More specific dependency

  return null;
}

export default RefreshHandler;