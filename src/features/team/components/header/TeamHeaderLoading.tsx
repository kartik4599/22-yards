import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const TeamHeaderLoading = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <Skeleton className="h-20 w-20 rounded-full" />
        </Avatar>
        <div>
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="text-center">
          <Skeleton className="h-6 w-16 mb-1" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="text-center">
          <Skeleton className="h-6 w-16 mb-1" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="text-center">
          <Skeleton className="h-6 w-16 mb-1" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
};

export default TeamHeaderLoading;
