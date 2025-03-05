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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Upload } from "lucide-react";

const CreateTeam = () => {
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
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="team-name">Team Name</Label>
            <Input id="team-name" placeholder="Enter team name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="team-logo">Team Logo</Label>
            <div className="flex items-center gap-4">
              <Input id="team-logo" type="file" className="hidden" />
              <Button
                variant="outline"
                className="w-full gap-2"
                onClick={() => document.getElementById("team-logo")?.click()}
              >
                <Upload className="h-4 w-4" />
                Upload Logo
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="team-description">Team Description</Label>
            <Textarea
              id="team-description"
              placeholder="Enter team description"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="team-type">Team Type</Label>
            <Select>
              <SelectTrigger id="team-type">
                <SelectValue placeholder="Select team type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="club">Club</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="school">School/University</SelectItem>
                <SelectItem value="community">Community</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Create Team</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeam;
