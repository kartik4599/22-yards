"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { getloggedInUser, pb } from "@/lib/database";
import { useRouter } from "next/navigation";
import { createTeam } from "../api/create-team";

const formSchema = z.object({
  name: z.string().min(2, "Team name must be at least 2 characters"),
  shortName: z.string().min(2, "Short name must be at least 2 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const CreateTeam = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, startTransition] = useTransition();

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      try {
        const { user } = getloggedInUser();
        if (!user) return;

        const newTeam = await createTeam({
          name: data.name,
          shortName: data.shortName,
          createdBy: user.id,
          logo: selectedFile,
        });

        router.push(`/team/${newTeam.id}`);
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create New Team
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Team</DialogTitle>
          <DialogDescription>
            Fill in the details to create your new cricket team.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="team-name">Team Name</Label>
            <Input
              id="team-name"
              placeholder="Enter team name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="team-name">Short Name</Label>
            <Input
              id="team-name"
              placeholder="Enter team name"
              {...register("shortName")}
            />
            {errors.shortName && (
              <p className="text-red-500 text-sm">{errors.shortName.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="team-logo">Team Logo</Label>
            <div className="flex items-center gap-4">
              <Input
                id="team-logo"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setSelectedFile(file);
                }}
              />
              <Button
                type="button"
                variant="outline"
                className="w-full max-w-full gap-2"
                onClick={() => document.getElementById("team-logo")?.click()}
              >
                <Upload className="h-4 w-4" />
                <span className="truncate max-w-72">
                  {selectedFile ? selectedFile.name : "Upload Logo"}
                </span>
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              {isLoading ? "Creating Team..." : "Create Team"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeam;
