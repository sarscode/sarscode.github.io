import React from "react";
import SarscodePreview from "../assets/sarscode-preview.png";
import { Link } from "react-router-dom";

function Work() {
  return (
    <main>
      <h1>Work</h1>
      <p className="content">
        I have worked on a couple of projects for open-source, freelance and for
        employers. Here are a few that I find most interesting and love to
        showcase.
      </p>
      <div className="work">
        <section className="work__content">
          <h2 className="work__title">Open Source</h2>
          <p>Some projects I actively maintain and contribute to.</p>
          <h3 className="work__title">sarscode.dev</h3>
          <p>
            <strong>sarscode.dev</strong> is my personal website which is what
            you are currently viewing. It's a client side web app built with{" "}
            <a href="https://reactjs.org">ReactJS</a> and{" "}
            <a href="sass-lang.com">SCSS</a>, and deployed on{" "}
            <a href="https://www.netlify.com/">Netlify</a>.
          </p>
          <p>
            <a
              href="https://github.com/sarscode/sarscode.dev"
              className="work__link"
            >
              View source code on github
            </a>
          </p>
          <p>
            View more open source projects on my{" "}
            <a href="https://github.com/sarscode" className="work__link">
              github page
            </a>
          </p>
          <img
            src={SarscodePreview}
            alt="sarscode.dev project snapshot"
            className="work__img"
          />
        </section>
        <hr />
        <section className="work__content">
          <h2 className="work__title">Other Projects</h2>
          <p>
            There are a couple of projects I have worked on as a Freelancer and
            created while learning new technologies or building just for fun.
            However, I'm usually excited to talk about a few.
          </p>
        </section>
        <hr />
        <section className="work__content">
          <h2 className="work__title">Employment</h2>
          <p>
            I'm currently available for full-time or part-time job, onsite or
            remote. Want to hire me, send me an email{" "}
            <a href="mailto:iamsarscode@gmail.com">iamsarscode@gmail.com</a> or{" "}
            <Link to="/contact">leave me a message.</Link>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Work;
