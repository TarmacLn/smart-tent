import React, { useEffect, useRef, useCallback } from "react";
import { Button, ButtonProps } from "@mui/material";
import { Howl } from "howler";

import Click from "../../assets/sounds/Click.mp3";
import Back from "../../assets/sounds/Back.mp3";
import Complete from "../../assets/sounds/Complete.mp3";
import { uiStore } from "../../stores";

type SoundKey = "Click" | "Back" | "Complete";
type SoundButtonProps = ButtonProps & {
  sound?: SoundKey | string;
  allowOverlap?: boolean;
  volume?: number;
  preload?: boolean;
};

const SOUND_MAP: Record<SoundKey, string> = {
  Click: Click,
  Back: Back,
  Complete: Complete,
};

export default function SoundButton({
  sound,
  allowOverlap = false,
  volume = 0.3,
  preload = true,
  onClick,
  onPointerDown,
  children,
  ...rest
}: SoundButtonProps) {
  const howlRef = useRef<Howl | null>(null);

  const resolveSrc = (s?: string | SoundKey) =>
    !s ? undefined : s in SOUND_MAP ? SOUND_MAP[s as SoundKey] : s;

  useEffect(() => {
    const src = resolveSrc(sound);
    if (!src) return;
    const h = new Howl({ src: [src], volume });
    if (preload) h.load();
    howlRef.current = h;
    return () => {
      h.unload();
      howlRef.current = null;
    };
  }, [sound, preload, volume]);

  const handlePointerDown: ButtonProps["onPointerDown"] = useCallback(
    (ev: React.PointerEvent<HTMLButtonElement>) => {
      const h = howlRef.current;
      const soundOn = uiStore.Sound;
      if (!soundOn) return;
      if (!h) return;

      if (h.state() === "loading") {
        h.once("load", () => {
          if (!allowOverlap) h.stop();
          h.play();
        });
      } else {
        if (!allowOverlap) h.stop();
        h.play();
      }

      onPointerDown?.(ev);
    },
    [allowOverlap, onPointerDown]
  );


  const handleClick: ButtonProps["onClick"] = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(ev); // just forward user’s click
    },
    [onClick]
  );


  return (
    <Button {...rest} onPointerDown={handlePointerDown} onClick={handleClick}>
      {children}
    </Button>
  );
}
