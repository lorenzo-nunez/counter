import React from "react";
//import { Link } from "react-router-dom";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/counter">
                  <p>Counter</p>
                </Link>
              </li>
              <li>
                <Link href="/textinput">
                  <p>Text Input</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
