import React, { useContext } from "react";
import { store } from "./store";

function App() {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const addToCart = () => {
    const cart = { id: "p1", name: "Item" };
    dispatch({
      type: "ADD_TO_CART",
      payload: cart,
    });
  };

  const clearCart = () => {
    const cart = { id: "p1" };
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: cart,
    });
  };

  const createUser = () => {
    const user = { name: "Test", id: "a1" };
    dispatch({ type: "SET_USER", payload: user });
  };

  const editUser = () => {
    const user = { name: "Test edited", id: "a1" };
    dispatch({ type: "EDIT_USER", payload: user });
  };

  return (
    <div>
      <header>
        <p>Hooks + Context minimal example</p>
        <div>
          <button onClick={addToCart}>Add to Cart</button>
          <button onClick={clearCart}>Clear Cart</button>

          <button onClick={createUser}>Set User</button>
          <button onClick={editUser}>Edit User</button>

          <button onClick={() => console.log(globalState.state)}>
            Log state
          </button>
        </div>
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

export default App;
