import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "HPC",
    path: "/hpc",
    newTab: false,
  },
  {
    id: 3,
    title: "GneroAI",
    path: "/gneroai",
    newTab: false,
  },
  {
    id: 4,
    title: "GneSkills",
    path: "https://www.skillkit.sh",
    newTab: true,
  },
  {
    id: 5,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 6,
    title: "Blog",
    path: "https://harness.genetind.com",
    newTab: true,
  },
  {
    id: 7,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
