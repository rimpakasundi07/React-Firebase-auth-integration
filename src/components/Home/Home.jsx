import React, { use } from "react";
// import Login from "../Login/Login";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Home = () => {
  const authInfo = use(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <h2>I am Home</h2>
      {/* <Login>
        <button>Click me</button>
      </Login> */}
    </div>
  );
};

export default Home;
