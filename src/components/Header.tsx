/** @format */

import React from "react";

import verceImg from "@/assets/images/vercel.svg";
import Image from "next/image";
import VercelSvg from "./svg/vercel-svg";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

import { FiBell } from "react-icons/fi";
import { BsSlashLg } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
type Props = {};

const pages = [
  {
    title: "Overview",
    active: true
  },
  {
    title: "Integrations",
    active: false
  },
  {
    title: "Activity",
    active: false
  },
  {
    title: "Domains",
    active: false
  },
  {
    title: "Usage",
    active: false
  },
  {
    title: "Storage",
    active: false
  },
  {
    title: "Monitoring",
    active: false
  },
  {
    title: "Settings",
    active: false
  }
];

export default function Header() {
  return (
    <div className=" px-8 pt-4 border-b border-gray-500">
      {/* first section */}
      <section className="flex justify-between  ">
        {/* left */}
        <div className="flex items-center gap-3  ">
          <VercelSvg />
          {/* slash  */}
          <BsSlashLg className="dark:text-gray-500" />

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-5 w-5 rounded-full" />

          <p className="font-bold">utkarshseth</p>
          <button
            className=" p-2 text-xl transition-all hover:dark:bg-gray-800 py-3 rounded-md
        "
          >
            <HiOutlineChevronUpDown className="dark:text-gray-500" />
          </button>
        </div>
        {/* right */}
        <div className=" flex gap-3  ">
          {/* bell */}
          <button className="border   h-9 w-9  flex items-center justify-center dark:border-gray-500 rounded-full dark:text-gray-500 dark:hover:text-white ">
            <FiBell />
          </button>
          <button className="border   h-9 w-9  flex items-center justify-center dark:border-gray-500 rounded-full dark:text-gray-500 dark:hover:text-white ">
            <FaEquals />
          </button>
          {/* equl */}
        </div>
      </section>

      {/* second section */}
      <section className="flex gap-4 overflow-auto scrollbar-hide">
        {pages.map((d, i) => (
          <div
            key={i}
            className={cn("py-2 border-b-2  border-transparent", {
              "dark:border-white": d.active
            })}
          >
            <Button
              className={cn("hover:dark:bg-gray-900 text-gray-500", {
                "dark:text-white": d.active
              })}
              variant={"ghost"}
              key={i}
            >
              {d.title}{" "}
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
}
