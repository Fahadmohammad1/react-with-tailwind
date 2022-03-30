import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "./home" },
    { id: 2, name: "Shop", link: "./shop" },
    { id: 3, name: "Deals", link: "./deals" },
    { id: 4, name: "Coupons", link: "./coupons" },
    { id: 5, name: "Contact", link: "./contact" },
  ];
  return (
    <nav className="">
      <div
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <XIcon className="md:hidden w-15 h-8"></XIcon>
        ) : (
          <MenuIcon className="md:hidden w-15 h-8"></MenuIcon>
        )}
      </div>
      <ul
        className={`md:flex justify-center ${open ? "top-6" : "top-[-120px]"}`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
