"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image.js";
import { usePathname } from "next/navigation"; // ✅ detect current path

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Dark mode only on /recruitment
  const darkModeTrigger = pathname === "/recruitment" || pathname === "/submitted" ? false : true;

  const menuItems = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About" },
    { id: 3, link: "/projects", name: "Projects" },
    { id: 4, link: "/events", name: "Events" },
    { id: 5, link: "/resources", name: "Resources" },
    { id: 7, link: "/team", name: "Team" },
    { id: 8, link: "/contact", name: "Contact Us" },
  ];

  return (
    <div className={`relative ${!darkModeTrigger ? "bg-black/90 text-white" : ""}`}>
      {/* Dark overlay if false */}
 

      <Navbar
        maxWidth="xl"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className={`shadow-md pb-1.5 ${!darkModeTrigger ? "bg-black text-white" : ""}`}
      >
        <NavbarContent className="flex">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="mb-1.5">
            <Link href="/">
              <Image
                src="/CPBYTElogo.png"
                width={130}
                height={90}
                className="mt-3"
                alt="image"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex mt-3 gap-9 mb-2"
          justify="center"
        >
          {menuItems.map((item) => (
            <NavbarItem key={item.id}>
              <Link color="foreground" href={item.link}>
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent className="mt-3 mb-2" justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/recruitment"
              variant="flat"
              className={`flex items-center gap-2 justify-center text-md font-semibold animate-pulse ${
                darkModeTrigger
                  ? "bg-green-200 text-green-600 hover:bg-green-200"
                  : "bg-blue-700 text-white hover:bg-blue-900 hover:text-white"
              }`}
            >
              Recruitment
              <span className={`w-2 h-2  rounded-full animate-ping ${
                darkModeTrigger
                  ? "bg-green-700"
                  : "bg-white "
              }`}></span>
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.id}>
              <Link
                className="w-full delay-75"
                href={item.link}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
