import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CardIcon from "../../components/card-icon/card-icon.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { CartContext } from "../../contexts/cart.contex";

import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as= "span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
