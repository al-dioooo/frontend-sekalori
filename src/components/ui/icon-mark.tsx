import {
  IconDroplet,
  IconLeaf,
  IconRosetteDiscountCheck,
  IconSchool,
  IconUsersGroup,
  IconWheat,
  type Icon,
} from "@tabler/icons-react";
import { cn } from "@/lib/classnames";

type IconMarkProps = {
  name: string;
  className?: string;
};

const icons: Record<string, Icon> = {
  cap: IconSchool,
  drop: IconDroplet,
  grain: IconWheat,
  leaf: IconLeaf,
  seal: IconRosetteDiscountCheck,
  team: IconUsersGroup,
};

export function IconMark({ name, className }: IconMarkProps) {
  const Component = icons[name] ?? IconUsersGroup;

  return (
    <Component
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      strokeWidth={1.5}
    />
  );
}
