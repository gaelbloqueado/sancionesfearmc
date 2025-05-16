import { TableBody } from "@/components/ui/table";
import { KicksRowSkeleton } from "@/components/punishments/kicks/kicks-row-skeleton";

export const KicksBodySkeleton = () => (
  <TableBody>
    {Array.from({ length: 10 }).map((_, index) => (
      <KicksRowSkeleton key={index} />
    ))}
  </TableBody>
)