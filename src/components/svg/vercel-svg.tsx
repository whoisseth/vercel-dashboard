/** @format */

import { cn } from "@/lib/utils";
import React, { HtmlHTMLAttributes } from "react";

type Props = {};

export default function VercelSvg(props: HtmlHTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Vercel Logo"
      className={cn(" fill-black dark:fill-white h-6", props.className)}
      viewBox="0 0 75 65"
    >
      <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
    </svg>
  );
}
