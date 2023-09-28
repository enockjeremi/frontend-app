"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { ButtonBack, ButtonQuery } from "./Buttons/buttons-render";
import MarinesLogo from "@/app/common/icons/marines-icon";
import { useRouter } from "next/navigation";

const NavHeader = () => {
  const router = useRouter();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <button onClick={() => router.push("/")}>
          <MarinesLogo className="w-20 h-12" />
        </button>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex gap-8">
            <ButtonBack />
            <ButtonQuery />
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavHeader;
