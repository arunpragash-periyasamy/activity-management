import React from "react";
import { MenuItemChild } from "./MenuItemChild";

export interface MenuItemInterface {
  label: string;
  href?: string;
  icon: string | React.ReactElement;
  children?: MenuItemChild[]; // Optional, as not all items will have children
}
