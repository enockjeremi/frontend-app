"use client";
import React from "react";
import { useRouter } from "next/navigation";

//Components UI
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

//Components
import { ButtonBack, ButtonQuery } from "./buttons-render";
import MarinesLogo from "@/app/common/icons/marines-icon";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <header className="w-full lg:max-w-5xl mx-auto flex flex-wrap justify-between items-center">
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
      </header>
    </>
  );
};

export default Header;
