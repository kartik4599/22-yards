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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import UserSelector from "./UserSelector";
import { useState, useTransition } from "react";
import { User } from "../../api/fetch-player-team";
import useTeamDetail from "../../hook/use-team-detail";
import { addPlayinTeam } from "../../api/mutate-player-team";

const AddPlayerDialog = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [role, setRole] = useState("Player");
  const [skill, setSkill] = useState("");
  const { team, setPlayers } = useTeamDetail();
  const [dialogState, setDialogState] = useState(false);
  const [isLoading, startTransition] = useTransition();

  const submitHandler = () => {
    startTransition(async () => {
      if (!selectedUser || !skill || !team?.id) return;
      await addPlayinTeam({
        role,
        skill,
        userId: selectedUser.id,
        teamId: team.id,
      });
      await setPlayers(team.id);
      setDialogState(false);
    });
  };

  return (
    <Dialog open={dialogState} onOpenChange={setDialogState}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Player
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Player</DialogTitle>
          <DialogDescription>
            Enter the details of the new player.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <UserSelector
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          <div className="flex items-center gap-4">
            <Label htmlFor="skill" className="text-right">
              Skill
            </Label>
            <Select name="role" value={skill} onValueChange={setSkill}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select a one skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Batsman">Batsman</SelectItem>
                <SelectItem value="Bowler">Bowler</SelectItem>
                <SelectItem value="All-rounder">All-rounder</SelectItem>
                <SelectItem value="Wicket-keeper">Wicket-keeper</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Select name="role" value={role} onValueChange={setRole}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Captain">Captain</SelectItem>
                <SelectItem value="Vise-Captain">Vise-Captain</SelectItem>
                <SelectItem value="Player">Player</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={submitHandler}>
            {isLoading ? "Adding..." : "Add Player"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlayerDialog;
