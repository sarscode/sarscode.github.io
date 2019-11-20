import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1 className="content">Not Found</h1>
      <p>
        You searched deeper than the ocean. Please{" "}
        <Link to="/">return home.</Link>
      </p>
    </main>
  );
}

export default NotFound;
