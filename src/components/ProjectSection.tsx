/** @format */

import React from "react";
import VercelSvg from "./svg/vercel-svg";
import { TbActivityHeartbeat } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { PiGitBranchDuotone } from "react-icons/pi";

const projectData: ProjectCardProps[] = [
  {
    title: "E-commerce Website",
    link: "ecommerce-website.vercel.app",
    githubRepo: "username/ecommerce-website",
    lastCommit: "Added product search functionality",
    lastCommitTime: "2d"
  },
  {
    title: "Task Management App",
    link: "task-management-app.vercel.app",
    githubRepo: "username/task-management-app",
    lastCommit: "Implemented user authentication",
    lastCommitTime: "5h"
  },
  {
    title: "Blog Platform",
    link: "blog-platform.vercel.app",
    githubRepo: "username/blog-platform",
    lastCommit: "Fixed styling issues on mobile devices",
    lastCommitTime: "1d"
  },
  {
    title: "Fitness Tracker",
    link: "fitness-tracker.vercel.app",
    githubRepo: "username/fitness-tracker",
    lastCommit: "Added calorie tracking feature",
    lastCommitTime: "3d"
  },
  {
    title: "Recipe Sharing Website",
    link: "recipe-sharing-website.vercel.app",
    githubRepo: "username/recipe-sharing-website",
    lastCommit: "Implemented user profile pages",
    lastCommitTime: "6h"
  },
  {
    title: "Online Learning Platform",
    link: "online-learning-platform.vercel.app",
    githubRepo: "username/online-learning-platform",
    lastCommit: "Optimized database queries",
    lastCommitTime: "4d"
  },
  {
    title: "Social Media App",
    link: "social-media-app.vercel.app",
    githubRepo: "username/social-media-app",
    lastCommit: "Fixed messaging functionality",
    lastCommitTime: "2d"
  },
  {
    title: "Travel Blog",
    link: "travel-blog.vercel.app",
    githubRepo: "username/travel-blog",
    lastCommit: "Added photo gallery feature",
    lastCommitTime: "1d"
  },
  {
    title: "Weather Forecast Application",
    link: "weather-forecast-app.vercel.app",
    githubRepo: "username/weather-forecast-app",
    lastCommit: "Implemented caching for weather data",
    lastCommitTime: "3d"
  },
  {
    title: "Event Management System",
    link: "event-management-system.vercel.app",
    githubRepo: "username/event-management-system",
    lastCommit: "Fixed event registration bug",
    lastCommitTime: "2h"
  },
  {
    title: "Job Search Platform",
    link: "job-search-platform.vercel.app",
    githubRepo: "username/job-search-platform",
    lastCommit: "Updated job listing UI",
    lastCommitTime: "1d"
  },
  {
    title: "Music Streaming Service",
    link: "music-streaming-service.vercel.app",
    githubRepo: "username/music-streaming-service",
    lastCommit: "Added playlist sharing feature",
    lastCommitTime: "2d"
  }
];

type Props = {};

export default function ProjectSection({}: Props) {
  return (
    <div className="grid grid-cols-1  gap-5 md:grid-cols-2 transition-all xl:grid-cols-3 ">
      {projectData.map((d, i) => (
        <ProjectCard
          key={i}
          title={d.title}
          link={d.link}
          githubRepo={d.githubRepo}
          lastCommit={d.lastCommit}
          lastCommitTime={d.lastCommitTime}
        />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  link: string;
  githubRepo: string;
  lastCommit: string;
  lastCommitTime: string;
}

function ProjectCard(props: ProjectCardProps) {
  const { title, link, githubRepo, lastCommit, lastCommitTime } = props;

  return (
    <div className="border rounded-lg dark:border-gray-500 p-4 dark:hover:border-white flex flex-col gap-4 cursor-pointer transition-all">
      <section className="flex justify-between items-center">
        <section className="flex gap-4">
          <div className="flex items-center justify-center border min-h-8 min-w-8 h-8 w-8 rounded-full dark:border-gray-700">
            <VercelSvg className="h-3" />
          </div>
          <div className="flex flex-col items-start">
            <button className="hover:underline whitespace-nowrap text-ellipsis overflow-hidden max-w-52">
              {title}
            </button>
            <button className="dark:text-gray-500 hover:underline whitespace-nowrap text-ellipsis overflow-hidden max-w-52">
              {link}
            </button>
          </div>
        </section>
        <section className="flex items-center gap-3">
          <button className="border-4 dark:border-gray-700 h-10 w-10 rounded-full text-2xl flex items-center justify-center dark:text-gray-700">
            <TbActivityHeartbeat />
          </button>
          <button className="flex items-center justify-center h-7 w-6 rounded-md hover:dark:bg-gray-500">
            <HiOutlineDotsHorizontal />
          </button>
        </section>
      </section>
      <button className="flex items-center gap-2 rounded-full px-4 py-1 dark:bg-gray-900 w-fit">
        <FaGithub />
        <p className="text-ellipsis overflow-hidden max-w-52 whitespace-nowrap">
          {githubRepo}
        </p>
      </button>
      <div className="text-gray-400">
        <p className="hover:underline transition-all">{lastCommit}</p>
        <p className="flex gap-1 items-center">
          <span>{lastCommitTime} ago on</span>
          <PiGitBranchDuotone className="text-xl dark:text-white" />
          <span className="dark:text-white">master</span>
        </p>
      </div>
    </div>
  );
}
