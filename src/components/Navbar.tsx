import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { useState } from "react";
import { useEffect } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span onClick={() => setActiveItem(name)}>{name}</span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div>
      <span className="font-bold text-green-default">{activeItem}</span>
      <div className="flex space-x-3 text-red-400 font-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
        {/* below code is for using without Navitem which is dynamically changing states */}
        {/* {activeItem !== "About" && (
          <Link href={"/"}>
            <span onClick={() => setActiveItem("About")}>About</span>
          </Link>
        )}
        {activeItem !== "Projects" && (
          <Link href={"/projects"}>
            <span onClick={() => setActiveItem("Projects")}>projects</span>
          </Link>
        )}
        {activeItem !== "Resume" && (
          <Link href={"/resume"}>
            <span onClick={() => setActiveItem("Resume")}>resume</span>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
