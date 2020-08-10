import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../layouts/auth";

import { store } from "../../store";

function Main() {
  // To access the shared state
  const globalState = useContext(store);

  // To dispatch actions
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
    <Layout>
      <Layout.Content>
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

              <NavLink to="/test">To Test Page</NavLink>
            </div>
            <div>
              <h1>Cart</h1>
              {globalState.state.cart &&
                globalState.state.cart.map((val) => <p>{val.name}</p>)}

              <h1>User</h1>
              {globalState.state.user && globalState.state.user.name}
            </div>
          </header>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default Main;
