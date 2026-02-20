import React from "react";

const Footer = ({ appName }) => {
  return (
    <>
      &copy; {new Date().getFullYear()} {appName}. All rights reserved.
    </>
  );
};

export default Footer;
