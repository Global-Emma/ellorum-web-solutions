import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Code,
  Smartphone,
  Search,
  Megaphone,
  Eye,
} from "lucide-react";
import { GiAutoRepair } from "react-icons/gi";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const previewServices = [
    {
      id: "web",
      icon: <Code />,
      title: "Website Design & Development",
      desc: "We design and build fast, secure, and responsive websites that help your business attract customers and grow online.",
    },
    {
      id: "app",
      icon: <Smartphone />,
      title: "Mobile App Development",
      desc: "We create intuitive mobile apps for Android and iOS that deliver seamless user experiences and support your business goals.",
    },
    // {
    //   id: "ui-ux",
    //   icon: <Layers />,
    //   title: "UI/UX Design",
    //   desc: "We design beautiful, user-friendly interfaces that make it easy for your customers to navigate and enjoy your digital products.",
    // },
    {
      id: "web-app",
      icon: <GiAutoRepair />,
      title: "Website & Mobile App Optimization and Maintainance",
      desc: "We improve the speed, performance, and user experience of your website and mobile apps to help you retain more users and grow your business.",
    },
    {
      id: "seo",
      icon: <Search />,
      title: "SEO Optimization",
      desc: "Improve your website's visibility on search engines so more people can discover your business and become customers.",
    },
    {
      id: "campaigns",
      icon: <Megaphone />,
      title: "Sponsored Ads & Campaigns",
      desc: "Reach the right audience with targeted advertising campaigns that increase traffic, generate quality leads, and grow your business.",
    },
    {
      id: "visibility",
      icon: <Eye />,
      title: "Online Visibility Strategy",
      desc: "Build a stronger online presence with strategies that help your business stand out, earn trust, and reach more potential customers.",
    },
  ];