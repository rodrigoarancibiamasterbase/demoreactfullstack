
const setUser = (user, setState) => {
    setState((prevState) => ({ ...prevState, user }));
    let storedState = localStorage.getItem("myState");
    storedState =
      storedState != null
        ? JSON.parse(storedState)
        : { user: null, token: null };
    storedState.user = user;
    localStorage.setItem("myState", JSON.stringify(storedState));
  };

  const setToken = (token, setState) => {
    setState((prevState) => ({ ...prevState, token }));
    let storedState = localStorage.getItem("myState");
    storedState =
      storedState != null
        ? JSON.parse(storedState)
        : { user: null, token: null };
    storedState.token = token;
    localStorage.setItem("myState", JSON.stringify(storedState));
  };
  module.exports={setUser, setToken}