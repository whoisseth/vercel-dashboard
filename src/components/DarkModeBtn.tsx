/** @format */
"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RiComputerLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

type Props = {};

export default function DarkModeBtn({}: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <section className="felx ">
        <button
          onClick={() => setTheme("dark")}
          className={cn(
            "p-2  rounded-full text-gray-400 dark:hover:text-white hover:text-slate-800 transition-all",
            theme === "dark" && "bg-gray-300 dark:bg-gray-800  "
          )}
        >
          <IoMoonOutline />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={cn(
            "p-2  rounded-full text-gray-400 dark:hover:text-white hover:text-slate-800 transition-all",
            theme === "light" && "bg-gray-300 dark:bg-gray-800 "
          )}
        >
          <FiSun />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={cn(
            "p-2  rounded-full text-gray-400 dark:hover:text-white hover:text-slate-800 transition-all",
            theme === "system" && "bg-gray-300 dark:bg-gray-800 "
          )}
        >
          <RiComputerLine />
        </button>
      </section>
    </div>
  );
}
