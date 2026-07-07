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
    <div className="relative bg-transparent">
      <Navbar
        maxWidth="xl"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="pb-1.5 bg-gray-950/40 backdrop-blur-md border-b border-white/10 text-white shadow-none"
      >
        <NavbarContent className="flex">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          <NavbarBrand className="mb-1.5">
            <Link href="/">
              <Image
                src="/CPBYTElogo.png"
                width={130}
                height={90}
                className="mt-3"
                alt="CPBYTE Logo"
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
              <Link
                color="foreground"
                href={item.link}
                className="text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarMenu className="bg-gray-950/95 backdrop-blur-xl border-t border-white/10">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.id}>
              <Link
                className="w-full delay-75 text-gray-300 hover:text-white"
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
