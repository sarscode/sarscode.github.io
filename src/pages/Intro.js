import React from "react";
import Social from "../components/Social";

function Intro() {
  return (
    <main>
      <h1 className="title">
        sarscode<span>.</span>
      </h1>
      <p className="content">
        Hi
        <span aria-label="waving" role="img">
          👋
        </span>
        , I’m<strong> Salifu Sani Rich, </strong>a Software Engineer and UI/UX
        Enthusiast based in Lagos, Nigeria. <br /> I design user interfaces and
        write code that works on the web.
      </p>
      <p>
        This is the first version of my personal site and it's opensource, you
        can view the{" "}
        <a href="https://github.com/sarscode/sarscode.dev">
          source code on github.
        </a>
      </p>
      <Social />
    </main>
  );
}

export default Intro;
