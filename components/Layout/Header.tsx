import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UploadIcon, SearchIcon } from "../Icons";

const Header = () => {
  return (
    <nav className="border-b sticky top-0 z-20 bg-white">
      <div className="flex justify-center mx-4">
        <div className="w-full max-w-[1150px] flex justify-between items-center h-[60px]">
          <Link href="/">
            <a className="flex items-end gap-1">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <span className="text-2xl leading-[1] font-bold">TikTok</span>
            </a>
          </Link>
          <form className="relative w-[360px] h-[46px] hidden md:block">
            <input
              className="w-full h-full outline-none bg-gray-1 rounded-full pl-4 pr-14 border border-transparent focus:border-gray-400 transition"
              type="text"
              placeholder="Search accounts and videos..."
            />
            <div className="absolute h-8 w-[1px] right-12 top-1/2 -translate-y-1/2 bg-gray-300"></div>
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <SearchIcon className="fill-gray-400 w-6 h-6" />
            </button>
          </form>
          <div className="flex items-center gap-3">
            <Link href="/">
              <a className="border rounded flex items-center gap-2 h-9 px-3 border-gray-200 bg-white hover:bg-gray-100 transition">
                <UploadIcon className="w-5 h-5" />
                <span className="font-medium">Upload</span>
              </a>
            </Link>
            <Link href="/sign-in">
              <a className="rounded font-medium h-9 px-6 bg-pink text-white flex items-center hover:brightness-105 transition">
                Log In
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
