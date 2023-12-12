import { getUserData } from "../adapters/domain/UserData";
import React, { useState, useContext, useEffect } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { setUser, setToken } from "../utils/authFunctions";
import DummyProducts from "../components/interfaces/DummyProducts";
import DummyProduct from "../components/interfaces/DummyProduct";
import WhiteBoldLinkAction from "../components/WhiteBoldLinkAction";
import "./UserPage.css";
const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const UserPage = () => {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem("myState");
    return storedState ? JSON.parse(storedState) : { user: null, token: null };
  });
  const [showProductDetail, setShowProductDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async (strToken) => {
      try {
        const userData = await getUserData(strToken);
        setUser(userData, setState);
      } catch (error) {
        console.error(error);
      }
    };

    if (state.token && !state.user) {
      getUser(state.token);
    }
  }, [state]);

  const handleLogout = () => {
    setToken(null, setState);
    setUser(null, setState);
    navigate("/");
  };
  const handleShowProductEvent = (id) => {
    // Update parent state or perform any action based on the parameter
    setShowProductDetail(id);
  };
  return (
    <AuthContext.Provider
      value={{ state, setUser, setToken, setState, handleLogout }}
    >
      {state.user ? (
        <>
          <div className="bar-container">
          <h1>Welcome, {state.user.username}!</h1>
            <WhiteBoldLinkAction handleClick={handleLogout} name="Logout" />
          </div>
        
          <div className="page-container">
          {
            (!showProductDetail)?  <DummyProducts  onEvent ={handleShowProductEvent} />: <DummyProduct id={showProductDetail}  onEvent ={handleShowProductEvent}  />
          }
          
          </div>
        </>
      ) : (
        <LoginForm setToken={setToken} setState={setState} />
      )}
    </AuthContext.Provider>
  );
};

export default UserPage;
