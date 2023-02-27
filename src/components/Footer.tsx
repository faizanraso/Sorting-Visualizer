import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full fixed inset-x-0 bottom-0 justify-center items-center">
      <footer className="p-4 w-11/12 border-t border-white shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Made by Faizan Rasool 👨🏽‍💻
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
