"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
  type CSSProperties,
} from "react";
import { themes, teams, type TeamTheme } from "./data";

interface TeamContextValue {
  selected: string | null;
  theme: TeamTheme | null;
  splashOpen: boolean;
  choose: (name: string) => void;
  openSplash: () => void;
  dismissSplash: () => void;
  ctaLabel: string;
  crestPath: string | null;
  /** CSS variables to apply on the root wrapper */
  themeStyle: CSSProperties;
}

const TeamContext = createContext<TeamContextValue | null>(null);

export function useTeam() {
  const ctx = useContext(TeamContext);
  if (!ctx) throw new Error("useTeam must be used within TeamProvider");
  return ctx;
}

function buildThemeStyle(hex: string | null): CSSProperties {
  if (!hex) return {};
  const m = hex.replace("#", "");
  const r = parseInt(m.slice(0, 2), 16);
  const g = parseInt(m.slice(2, 4), 16);
  const b = parseInt(m.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return {
    "--color-accent": hex,
    "--color-accent-100": `color-mix(in srgb, ${hex} 12%, white)`,
    "--color-accent-200": `color-mix(in srgb, ${hex} 22%, white)`,
    "--color-accent-400": `color-mix(in srgb, ${hex} 62%, white)`,
    "--color-accent-600": `color-mix(in srgb, ${hex} 86%, black)`,
    "--color-accent-700": `color-mix(in srgb, ${hex} 70%, black)`,
    "--tp-on-accent": lum > 0.6 ? "#141414" : "#ffffff",
  } as CSSProperties;
}

export function TeamProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [splashOpen, setSplashOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let stored: string | null = null;
    let dismissed = false;
    try {
      stored = localStorage.getItem("tp_team");
      dismissed = localStorage.getItem("tp_splash_dismissed") === "1";
    } catch {}
    if (stored && themes[stored]) {
      setSelected(stored);
    } else if (!dismissed) {
      setSplashOpen(true);
    }
  }, []);

  const choose = useCallback((name: string) => {
    try {
      localStorage.setItem("tp_team", name);
      localStorage.setItem("tp_splash_dismissed", "1");
    } catch {}
    setSelected(name);
    setSplashOpen(false);
  }, []);

  const openSplash = useCallback(() => setSplashOpen(true), []);
  const dismissSplash = useCallback(() => {
    try {
      localStorage.setItem("tp_splash_dismissed", "1");
    } catch {}
    setSplashOpen(false);
  }, []);

  const theme = selected ? themes[selected] ?? null : null;
  const ctaLabel = selected ? "Quero fazer parte!" : "Escolher meu time";
  const teamData = selected ? teams.find((t) => t.name === selected) : null;
  const crestPath = teamData?.crest ?? null;
  const themeStyle = useMemo(
    () => buildThemeStyle(theme?.color ?? null),
    [theme?.color]
  );

  const effectiveSplash = mounted ? splashOpen : false;

  return (
    <TeamContext.Provider
      value={{
        selected,
        theme,
        splashOpen: effectiveSplash,
        choose,
        openSplash,
        dismissSplash,
        ctaLabel,
        crestPath,
        themeStyle,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}
