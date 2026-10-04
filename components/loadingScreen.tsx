"use client";

import { useEffect, useState } from "react";
import { animate } from "motion";
import "./loadingScreen.css";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinner = document.querySelector(".loading-spinner");

    if (!spinner) return;

    const animation = animate(
      spinner,
      {
        transform: "rotate(360deg)",
      },
      {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      }
    );

    return () => {
      animation.stop();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black">
      <div className="loading-spinner h-[50px] w-[50px] rounded-full border-[4px] border-white/20 border-t-purple-500" />
    </div>
  );
}
