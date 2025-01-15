import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <nav className="bg-yellow-700  ">
        <div className="mx-20 justify-between ">
          <div className="absolute mt-2">
            <Image
              src="/logo.jpg"
              width={100}
              height={100}
              alt="logo"
              className="rounded-full"
            />
          </div>

          <div className="flex justify-end">
            {navLinks.map((link, index?) => {
              return (
                <ul className="h-14 content-center mx-5">
                  <Link href={link.path} className="">
                    <li
                      key={index}
                      className="text-xl font-bold text-white hover:text-sky-200"
                    >
                      {link.name}
                    </li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      </nav>
    </>
    // <nav className="bg-gray-800">
    //   <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //     <div className="flex shrink-0 items-center">
    //       <img
    //         className="h-8 w-auto"
    //         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
    //         alt="Your Company"
    //       />
    //     </div>
    //     <div className="hidden sm:ml-6 sm:block">
    //       <div className="flex space-x-4">
    //         {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
    //         <a
    //           href="#"
    //           className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
    //           aria-current="page"
    //         >
    //           Dashboard
    //         </a>
    //         <a
    //           href="#"
    //           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    //         >
    //           Team
    //         </a>
    //         <a
    //           href="#"
    //           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    //         >
    //           Projects
    //         </a>
    //         <a
    //           href="#"
    //           className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    //         >
    //           Calendar
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Nav;

// const styles = StyleSheet.create({});
