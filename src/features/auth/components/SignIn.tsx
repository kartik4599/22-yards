"use client";

import { Button } from "@/components/ui/button";
import { pb } from "@/lib/database";
import { FcGoogle } from "react-icons/fc";
import { setCookie } from "cookies-next/client";
import { BiSolidCricketBall } from "react-icons/bi";

const SignIn = () => {
  const gooleHandler = async () => {
    try {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      setCookie("pb_auth", pb.authStore.exportToCookie());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center bg-muted p-8 lg:p-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="mx-auto max-w-lg text-center block lg:hidden">
          <div className="inline-flex items-center justify-center">
            <BiSolidCricketBall className="h-14 w-14" />
          </div>
          <h1 className="text-4xl font-bold mt-6">22 Yards</h1>
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Use your google account to access your account.
          </p>
        </div>
        <Button variant={"outline"} className="w-full" onClick={gooleHandler}>
          <FcGoogle className="h-14 w-14 mx-2" />
          Sign In with Google
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
