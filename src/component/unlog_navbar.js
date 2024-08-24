import { Disclosure } from "@headlessui/react";

import Search from "./search";
import Logo from "./petowner/logo.png";

import { Link } from "react-router-dom";
import "./petowner/navbar.css";

export default function Navbar_unlog() {
  return (
    <Disclosure
      as="nav"
      className="bg-transparent fixed top-0 right-0 left-0 z-10 backdrop-blur-3xl"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-start gap-72">
            <Link to={`/`}>
              <div className="flex flex-shrink-0 items-center">
                <img alt="Logo" src={Logo} className="logoNav" />
              </div>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <div className="flex justify-center items-center">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <Link to={`/login`}>
            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
              Sign in
            </div>
          </Link>
        </div>
      </div>
    </Disclosure>
  );
}
