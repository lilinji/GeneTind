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
    title: "GneroAI",
    path: "/gneroai",
    newTab: false,
  },
  {
    id: 3,
    title: "GneSkills",
    path: "https://www.skillkit.sh",
    newTab: true,
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Blog",
    path: "https://ml.genetind.com",
    newTab: true,
  },
  {
    id: 6,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
