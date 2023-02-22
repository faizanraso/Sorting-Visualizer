import React from "react";

function Header() {
  return (
    <header className="flex w-screen mt-5 border-b-2 pb-7 sm:px-4 px-2 items-center justify-between">
      <a className="text-3xl">Algos</a>
      <div className="socials">
        <a href="https://github.com/faizanraso" className="px-2 underline">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/faizanraso/"
          className="px-2 underline"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
