"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";

interface AudioContextType {
  isPlaying: boolean;
  isVisible: boolean;
  toggleSound: (e?: React.MouseEvent) => void;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  isVisible: false,
  toggleSound: () => {},
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const TARGET_VOLUME = 0.02; // Very subtle ambient whisper

  useEffect(() => {
    // Stop any legacy audio elements in document
    if (typeof window !== "undefined") {
      document.querySelectorAll("audio").forEach((el) => {
        if (el !== audioRef.current) {
          el.pause();
          el.src = "";
          el.remove();
        }
      });
    }

    if (audioRef.current) {
      audioRef.current.volume = TARGET_VOLUME;
    }

    // First user gesture anywhere on the page unlocks and starts the single audio element
    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.muted = false;
        audio.volume = TARGET_VOLUME;
        audio
          .play()
          .then(() => {
            setIsVisible(true);
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay blocked:", err);
            setIsVisible(true);
            setIsPlaying(true);
          });
      } else {
        setIsVisible(true);
        setIsPlaying(true);
      }

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Turn OFF: pause and mute immediately
      audio.pause();
      audio.muted = true;
      setIsPlaying(false);
    } else {
      // Turn ON: unmute and play
      audio.muted = false;
      audio.volume = TARGET_VOLUME;
      audio.play().catch((err) => {
        console.warn("Playback blocked:", err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isVisible, toggleSound }}>
      {/* The ONE and ONLY audio element in the entire application */}
      <audio
        ref={audioRef}
        src="/audio/warm-acoustic.mp3?v=2"
        loop
        preload="auto"
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
