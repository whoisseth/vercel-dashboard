/** @format */

import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BiChevronDown } from "react-icons/bi";

export default function SearchSection() {
  return (
    <div className=" flex gap-3 w-full ">
      <div className="relative w-full">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground " />
        <Input
          placeholder="Search Repositories and Projects..."
          className="pl-8 w-full bg-inherit"
        />
      </div>

      <Button className="flex items-center gap-2">
        <span>Add New... </span>
        <BiChevronDown className="text-xl" />
      </Button>
    </div>
  );
}
