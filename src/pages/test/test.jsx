import React, { useContext } from "react";
import { store } from "../../store";

function Test() {
  // To access the shared state 
  const globalState = useContext(store);
  

  return (
    <div>
      <header>
        <p>Hooks + Context minimal example</p>

        <div>
          <h1>Cart</h1>
          {globalState.state.cart && globalState.state.cart.map((val) => (
            <p>{val.name}</p>
          ))}

          <h1>User</h1>
          {globalState.state.user && globalState.state.user.name}
        </div>
      </header>
    </div>
  );
}

export default Test;
