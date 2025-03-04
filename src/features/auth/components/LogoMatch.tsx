import { cn } from "@/lib/utils";
import React from "react";
import { BiSolidCricketBall } from "react-icons/bi";

const isSignIn = true;

const LogoMatch = () => {
  return (
    <div
      className={cn(
        "hidden lg:flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8",
        {
          "bg-background": !isSignIn,
          "bg-primary": isSignIn,
        }
      )}
    >
      <div className="mx-auto max-w-lg text-center">
        <div
          className={cn(
            "inline-flex items-center justify-center rounded-full bg-background p-4 text-6xl text-primary-foreground",
            !isSignIn && "bg-primary"
          )}
        >
          <BiSolidCricketBall
            className={cn(
              "h-14 w-14 text-primary",
              !isSignIn && "text-background"
            )}
          />
        </div>
        <h1 className="text-secondary text-5xl font-bold mt-6">22 Yards</h1>
        <p
          className={cn(
            "mt-4 text-lg leading-8 text-muted-foreground",
            isSignIn && "text-primary-foreground"
          )}
        >
          Get live scores from your neighborhood cricket matches. Stay connected
          to your local cricket community, ball by ball
        </p>
      </div>
    </div>
  );
};

export default LogoMatch;
