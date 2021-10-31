import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import 'tailwindcss/tailwind.css';

const Tailwind: NextPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 sm:py-12 md:py-16 sm:px-8">
      <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t sm:bg-none from-black">
        <p className="sm:mb-1 text-sm font-medium text-white sm:text-gray-500">
          Entire house
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold sm:leading-7 text-white sm:text-black">
          Beach House in Collingwood
        </h2>
      </div>
      <div className="col-start-1 row-start-2 px-4 sm:pb-16">
        <div className="flex items-center my-5 sm:mt-2 sm:mb-4 text-sm font-medium">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="text-violet-600"
          >
            <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
          </svg>
          <div className="ml-1">
            <span className="text-black">4.94</span>
            <span className="sm:hidden md:inline">(128)</span>
          </div>
          <div className="mx-2 text-base font-normal">·</div>
          <div>Collingwood, Ontario</div>
        </div>
        <hr className="hidden sm:block w-16 border-gray-300" />
      </div>
      <div className="col-start-1 row-start-3 px-4 space-y-3">
        <p className="flex items-center text-sm font-medium text-black">
          <img
            src="https://unsplash.it/640/425"
            alt=""
            className="mr-2 w-6 h-6 bg-gray-100 rounded-full"
          />
          Hosted by Kevin Francis
        </p>
        <button
          type="button"
          className="py-2 px-6 text-base font-semibold rounded-lg bg-violet-100 text-violet-700"
        >
          Check availability
        </button>
      </div>
      <div className="flex col-start-1 sm:col-start-2 sm:row-span-3 row-start-1">
        <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full">
          <div className="relative col-span-3 md:col-span-2 row-span-2">
            <img
              src="https://unsplash.it/640/425"
              alt=""
              className="object-cover absolute inset-0 w-full h-full bg-gray-100 sm:rounded-lg"
            />
          </div>
          <div className="hidden md:block relative">
            <img
              src="https://unsplash.it/640/425"
              alt=""
              className="object-cover absolute inset-0 w-full h-full bg-gray-100 rounded-lg"
            />
          </div>
          <div className="hidden md:block relative">
            <img
              src="https://unsplash.it/640/425"
              alt=""
              className="object-cover absolute inset-0 w-full h-full bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailwind;
