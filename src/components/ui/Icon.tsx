import {
  Heart,
  Home,
  Users,
  ShieldCheck,
  HandHeart,
  ClipboardList,
  CalendarDays,
  Smile,
  Utensils,
  Stethoscope,
  BedDouble,
  Trees,
  Sofa,
  Palette,
  Coffee,
  Wrench,
  ListChecks,
  Monitor,
  Scale,
  type LucideProps,
} from "lucide-react";

const map = {
  heart: Heart,
  home: Home,
  users: Users,
  shield: ShieldCheck,
  "hand-heart": HandHeart,
  clipboard: ClipboardList,
  calendar: CalendarDays,
  smile: Smile,
  utensils: Utensils,
  stethoscope: Stethoscope,
  bed: BedDouble,
  trees: Trees,
  sofa: Sofa,
  palette: Palette,
  coffee: Coffee,
  wrench: Wrench,
  "list-checks": ListChecks,
  monitor: Monitor,
  scale: Scale,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name] ?? Heart;
  return <Cmp {...props} />;
}
