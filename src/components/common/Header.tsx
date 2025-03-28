import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BiSolidCricketBall } from "react-icons/bi";
import { MoblieSideBar } from "./SideBar";
import { getImageUrl, getloggedInUser } from "@/lib/database";
import { cookies } from "next/headers";

const Header = async () => {
  const cookie = await cookies();
  const { user } = getloggedInUser(cookie.get("pb_auth")?.value);
  if (!user) return null;

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/5 backdrop-blur-xs px-4 md:px-6">
      <MoblieSideBar />
      <div className="flex items-center gap-2">
        <BiSolidCricketBall className="h-6 w-6" />
        <span className="text-xl font-bold tracking-tight">22 Yards</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={getImageUrl({
                    collectionId: user.collectionId,
                    filename: user.avatar,
                    id: user.id,
                  })}
                  alt="User"
                />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Subscriptions</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
