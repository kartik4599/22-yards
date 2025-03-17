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
import { useEffect, useMemo, useState, useTransition } from "react";
import { User } from "../../api/fetch-player-team";
import useTeamDetail from "../../hook/use-team-detail";
import { addUpdatePlayerInTeam } from "../../api/mutate-player-team";
import useAddUpdatePlayer from "../../hook/use-mutate-player";

const AddPlayerDialog = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [role, setRole] = useState("Player");
  const [skill, setSkill] = useState("");
  const { team, setPlayers } = useTeamDetail();
  const { state, setModal, player } = useAddUpdatePlayer();
  const [isLoading, startTransition] = useTransition();

  const submitHandler = () => {
    startTransition(async () => {
      if (!selectedUser || !skill || !team?.id) return;
      if (state === "delete") {
      } else {
        await addUpdatePlayerInTeam({
          role,
          skill,
          userId: selectedUser.id,
          teamId: team.id,
          playerId: player?.id,
        });
      }

      await setPlayers(team.id);
      setModal("");
    });
  };

  const headerAndDescription = useMemo(() => {
    if (state === "add")
      return {
        header: "Add New Player",
        description: "Enter the details of the new player.",
        button: "Add Player",
      };
    if (state === "update")
      return {
        header: "Update Player",
        description: "Update the details of the player.",
        button: "Update Player",
      };
    if (state === "delete")
      return {
        header: "Delete Player",
        description: "Are you sure you want to delete this player?",
        button: "Delete Player",
      };
    return { header: "", description: "", button: "" };
  }, [state]);

  useEffect(() => {
    if (!player) return;
    setSelectedUser(player.expand.user);
    setRole(player.role);
    setSkill(player.skill);
  }, [player]);

  return (
    <Dialog
      open={!!state}
      onOpenChange={(value) => {
        if (value) return;
        setModal("");
      }}
    >
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => setModal("add")}>
          <Plus className="mr-2 h-4 w-4" />
          Add Player
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{headerAndDescription.header}</DialogTitle>
          <DialogDescription>
            {headerAndDescription.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <UserSelector
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            diable={state !== "add"}
          />
          <div className="flex items-center gap-4">
            <Label htmlFor="skill" className="text-right">
              Skill
            </Label>
            <Select
              name="role"
              value={skill}
              onValueChange={setSkill}
              disabled={state === "delete"}
            >
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
            <Select
              name="role"
              value={role}
              onValueChange={setRole}
              disabled={state === "delete"}
            >
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
          <Button
            onClick={submitHandler}
            variant={state === "delete" ? "destructive" : "default"}
          >
            {isLoading ? "Loading..." : headerAndDescription.button}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlayerDialog;
