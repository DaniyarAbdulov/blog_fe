import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  title?: string;
}

interface ButtonProps {
  to: string;
  text: string;
}

const isAuth: boolean = false;

const Header: React.FC<HeaderProps> = ({ title }) => {
  const renderButton = ({ to, text }: ButtonProps) => (
    <NavLink to={to} key={to}>
      <button className="inline-block  shadow-2xl shadow-slate-400 rounded-r-lg rounded-s-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-2 p-1">
        <p className=" text-xs font-sans md:text-base">{text}</p>
      </button>
    </NavLink>
  );

  return (
    <header className="w-full bg-slate-200 max-h-screen h-full rounded-b shadow-slate-600 shadow-2xl">
      <div className="flex flex-row justify-between ml-10 mr-10">
        <div>
          <NavLink className="text-base font-sans md:text-lg " to="/">
            <button>
              <p>News Blog</p>
            </button>
          </NavLink>
        </div>
        <div className="flex flex-row gap-1 md:gap-5">
          {isAuth ? (
            <>
              {renderButton({ to: "/auth/login", text: "Create Post" })}
              {renderButton({ to: "/auth/register", text: "LogOut" })}
            </>
          ) : (
            <>
              {renderButton({ to: "/auth/login", text: "Log in" })}
              {renderButton({ to: "/auth/register", text: "Register" })}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
