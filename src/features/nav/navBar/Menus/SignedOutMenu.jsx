import React from "react";

import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ signIn }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
        onClick={signIn}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
