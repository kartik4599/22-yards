import {
  BarChart3,
  Calendar,
  Clock,
  Home,
  Menu,
  Trophy,
  Users,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { BiSolidCricketBall } from "react-icons/bi";

const SideBarItems = () => {
  const items = [
    {
      label: "Dashboard",
      icon: Home,
      href: "#",
    },
    {
      label: "Live Matches",
      icon: Clock,
      href: "#",
    },
    {
      label: "Previous Matches",
      icon: Calendar,
      href: "#",
    },
    {
      label: "My Teams",
      icon: Users,
      href: "#",
    },
    {
      label: "Tournaments",
      icon: Trophy,
      href: "#",
    },
    {
      label: "Statistics",
      icon: BarChart3,
      href: "#",
    },
  ];

  return (
    <nav className="grid gap-1 p-2">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export const MoblieSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <BiSolidCricketBall className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">22 Yards</span>
          </div>
        </SheetHeader>
        <SideBarItems />
      </SheetContent>
    </Sheet>
  );
};

const SideBar = () => {
  return (
    <div className="lg:mr-64">
      <aside className="hidden z-10 inset-y-0 left-0 w-64 fixed mt-16 flex-col shadow border-r bg-background lg:flex">
        <SideBarItems />
      </aside>
    </div>
  );
};

export default SideBar;
