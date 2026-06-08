import { useEffect, useState } from "react";
import "./Loader.css";

import frame01 from "@/assets/loader_animation/loader_frame_01.jpg";
import frame02 from "@/assets/loader_animation/loader_frame_02.jpg";
import frame03 from "@/assets/loader_animation/loader_frame_03.jpg";
import frame04 from "@/assets/loader_animation/loader_frame_04.jpg";
import frame05 from "@/assets/loader_animation/loader_frame_05.jpg";
import frame06 from "@/assets/loader_animation/loader_frame_06.jpg";
import frame07 from "@/assets/loader_animation/loader_frame_07.jpg";

const FRAMES = [frame01, frame02, frame03, frame04, frame05, frame06, frame07];
const FRAME_DURATION = 190; 
const FADE_DURATION = 500; // ms — must match the opacity transition in Loader.css

interface LoaderProps {
  loading: boolean;
}

const Loader = ({ loading }: LoaderProps) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((index) => (index + 1) % FRAMES.length);
    }, FRAME_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      setFadingOut(true);
      const timeout = setTimeout(() => setMounted(false), FADE_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  if (!mounted) return null;

  return (
    <div className={`loader-overlay${fadingOut ? " loader-overlay--hidden" : ""}`}>
      <img src={FRAMES[frameIndex]} alt="" className="loader-frame" />
    </div>
  );
};

export default Loader;
