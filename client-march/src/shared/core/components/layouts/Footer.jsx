import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>Copyright &copy; {year} My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

// whenever u want to hold the html content ===> instead of div / section  we will prefer to use fragments (<></>)
