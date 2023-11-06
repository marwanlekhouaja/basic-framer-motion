import React from "react";

function Header() {
  const styleLink = {
    textDecoration: "none",
    color: "black",
    fontFamily: "monospace",
    margin: "10px",
    fontWeight: "bold",
    fontSize: "1.4rem",
  };
  return (
    <>
      <nav className="p-2 shadow-lg d-flex align-items-center justify-content-between">
        <div className="logo ms-4">
          <h2>Jude Bellingham</h2>
        </div>
        <div className="navLinks me-4">
          <a href="test" style={styleLink}>
            Home
          </a>
          <a href="test" style={styleLink}>
            About Us
          </a>
          <a href="test" style={styleLink}>
            Our Team
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
