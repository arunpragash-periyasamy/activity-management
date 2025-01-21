import { IconType } from "react-icons";
import { MenuItemChild } from "./MenuItemChild";

 export interface MenuItemInterface {
    label: string;
    href?: string;
    icon: any;
    children?: MenuItemChild[]; // Optional, as not all items will have children
  }