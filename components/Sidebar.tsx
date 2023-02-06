import Link from "next/link";
import React from "react";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings, FiMoreHorizontal } from "react-icons/fi";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

interface IProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex">
      <div
        className={`p-6 w-60 h-screen bg-white z-20 fixed top-0 peer-focus:left-0 peer: transition ease-out delay-150 duration-200`}
      >
        <div className="flex flex-col  justify-start items-center">
          <Link href={"/"}>
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Virtual Dashboard
            </h1>
          </Link>
        </div>
        <div className="my-4 border-b border-gray-100 pb-4">
          <Link href={"/dashboard"}>
            <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 pl-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <RxDashboard className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 font-semibold group-hover:text-white">
                Dashboard
              </h3>
            </div>
          </Link>
          <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 pl-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <RxPerson className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 font-semibold group-hover:text-white">
              Users
            </h3>
          </div>
          <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 pl-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <HiOutlineShoppingBag className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 font-semibold group-hover:text-white">
              Orders
            </h3>
          </div>
          <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 pl-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FaProductHunt className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 font-semibold group-hover:text-white">
              Products
            </h3>
          </div>
        </div>
        <div className="my-4 border-b border-gray-100 pb-4">
          <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 pl-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FiSettings className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 font-semibold group-hover:text-white">
              Settings
            </h3>
          </div>
          <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 pl-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <FiMoreHorizontal className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 font-semibold group-hover:text-white">
              More
            </h3>
          </div>
        </div>
        <div className="my-4">
          <div className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-900 pl-4 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
            <h3 className="text-base text-gray-800 font-semibold group-hover:text-white">
              Logout
            </h3>
          </div>
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
