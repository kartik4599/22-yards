import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getUserList, User } from "../../api/fetch-player-team";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getImageUrl } from "@/lib/database";

const UserSelector = ({
  setSelectedUser,
  selectedUser,
  diable,
}: {
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
  selectedUser: User | null;
  diable?: boolean;
}) => {
  const [userlist, setUserList] = useState<User[]>([]);
  const [keyword, setKeyword] = useState("");

  const fetchUserList = async () => {
    const users = await getUserList(keyword);
    setUserList(users);
  };

  useEffect(() => {
    fetchUserList();
  }, [keyword]);

  return (
    <Command className="rounded-lg border shadow-md min-w-[400px] md:min-w-[450px]">
      <CommandInput
        value={selectedUser?.name || keyword}
        onValueChange={(value: string) => {
          if (selectedUser) return;
          setKeyword(value);
        }}
        placeholder="Search User"
      />
      {selectedUser && (
        <CommandList>
          <CommandGroup heading="Selected User">
            <CommandItem
              onSelect={diable ? null : setSelectedUser.bind(null, null)}
              className="flex w-full justify-between items-center"
            >
              <div className="flex items-center gap-x-2">
                <Avatar className="size-6">
                  <AvatarImage
                    src={getImageUrl({
                      collectionId: selectedUser.collectionId,
                      filename: selectedUser.avatar,
                      id: selectedUser.id,
                    })}
                  />
                </Avatar>
                <span>{selectedUser.name}</span>
              </div>
              {!diable && <X />}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      )}
      <CommandSeparator />
      {!selectedUser && (
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Users">
            {userlist.map((user) => (
              <CommandItem
                onSelect={setSelectedUser.bind(null, user)}
                key={user.id}
                className="flex"
              >
                <Avatar className="size-6">
                  <AvatarImage
                    src={getImageUrl({
                      collectionId: user.collectionId,
                      filename: user.avatar,
                      id: user.id,
                    })}
                  />
                </Avatar>
                <span>{user.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
};

export default UserSelector;
