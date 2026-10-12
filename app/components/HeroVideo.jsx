"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon, SoundOffIcon, SoundOnIcon } from "./Icons";

// Full-bleed hero video with visible play/pause and sound controls.
// Starts muted and plays on its own unless the visitor prefers reduced
// motion; then it waits for the Play button. Pauses itself while scrolled out
// of view (unless the visitor turned it off, it resumes on return).
export default function HeroVideo({ src, label, children }) {
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = video.play();
    if (attempt?.catch) attempt.catch(() => setPlaying(false));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.muted = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reduce.matches) play();

    let observer;
    if ("IntersectionObserver" in window && frameRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && !video.paused) video.pause();
          if (entry.isIntersecting && video.paused && !userPaused.current && !reduce.matches) play();
        },
        { threshold: 0.15 },
      );
      observer.observe(frameRef.current);
    }
    return () => observer?.disconnect();
  }, [play]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      play();
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    const next = !muted;
    setMuted(next);
    if (video && !next) {
      video.muted = false;
      video.volume = 1;
      if (video.paused) {
        userPaused.current = false;
        play();
      }
    }
  };

  return (
    <div className={`heroFrame${failed ? " videoFailed" : ""}`} ref={frameRef}>
      <video
        ref={videoRef}
        className="heroVideo"
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      >
        <source src={`${src}#t=0.1`} type="video/mp4" onError={() => setFailed(true)} />
        Your browser can’t play this video. <a href={src}>Download the video</a>.
      </video>
      <div className="heroShade" aria-hidden="true" />
      {children}
      {!failed ? (
        <div className="videoControls" role="group" aria-label="Video controls">
          <button type="button" className="videoButton" onClick={togglePlay}>
            {playing ? <PauseIcon /> : <PlayIcon />}
            <span>{playing ? "Pause" : "Play"}</span>
            <span className="visuallyHidden"> video</span>
          </button>
          <button type="button" className="videoButton" onClick={toggleSound}>
            {muted ? <SoundOffIcon /> : <SoundOnIcon />}
            <span>{muted ? "Unmute" : "Mute"}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
