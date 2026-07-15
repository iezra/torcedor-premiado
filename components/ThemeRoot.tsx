"use client";

import { useTeam } from "@/lib/team-context";

export default function ThemeRoot({ children }: { children: React.ReactNode }) {
  const { themeStyle } = useTeam();
  return <div style={themeStyle}>{children}</div>;
}
