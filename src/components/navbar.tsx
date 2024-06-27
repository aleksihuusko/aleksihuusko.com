"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";

import { Dialog, DialogPanel } from "@headlessui/react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigation = [
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Work", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background">
      <div className="container">
        <nav
          className="mx-auto flex items-center justify-between py-6"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="#"
              className="-m-1.5 flex items-center justify-center gap-2 p-1.5 font-semibold transition duration-200 ease-in-out hover:text-muted-foreground"
            >
              <span className="sr-only">Aleksi Huusko</span>
              <Logo className="h-8 w-8" />
              Aleksi Huusko
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden flex-1 items-center justify-end gap-x-4 lg:flex">
            <Button variant="ghost" asChild>
              <Link href="#">Free Audit</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">Start a Project</Link>
            </Button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="container fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background py-6 sm:max-w-sm sm:ring-1 sm:ring-foreground/10">
            <div className="flex items-center justify-between gap-x-6">
              <Link
                href="#"
                className="-m-1.5 flex items-center justify-center gap-2 p-1.5 font-semibold"
              >
                <span className="sr-only">Aleksi Huusko</span>
                <Logo className="h-8 w-8" />
                Aleksi Huusko
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </div>
    </header>
  );
}
