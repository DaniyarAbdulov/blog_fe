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
      <button className="inline-block  shadow-2xl shadow-slate-400 rounded-r-lg rounded-s-lg hover:bg-gray-700  px-2 p-1 mb-1 mt-1 text-neutral-100 cursor-pointer">
        <p className=" text-xs font-sans md:text-base">{text}</p>
      </button>
    </NavLink>
  );

  return (
    <nav className="w-full  sticky top-0 bg-gradient-to-br from-slate-100 to-slate-400 rounded-b-md  shadow-slate-600 shadow-sm">
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
    </nav>
  );
};

export default Header;
