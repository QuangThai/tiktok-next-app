import { FC, HTMLProps, useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon, VolumeOffIcon, VolumeOnIcon } from "../Icons";

const Video: FC<HTMLProps<HTMLVideoElement>> = (props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPaused, setIsPaused] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isPaused) {
      if (!videoRef.current?.paused) {
        videoRef.current?.pause();
      }
    } else {
      if (videoRef.current?.paused) {
        videoRef.current.play();
      }
    }
  }, [isPaused]);

  return (
    <div className="h-full w-auto relative cursor-pointer">
      <video
        {...props}
        ref={videoRef}
        className="max-h-full w-auto"
        onPauseCapture={() => setIsPaused(true)}
        onPlayCapture={() => setIsPaused(false)}
        muted={isMuted}
        playsInline
        loop
        controls={false}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsPaused(!isPaused);
        }}
        className="absolute bottom-4 left-3 z-10"
      >
        {isPaused ? (
          <PauseIcon className="fill-white h-7 w-7" />
        ) : (
          <PlayIcon className="fill-white h-7 w-7" />
        )}
      </button>
      <button
        className="absolute bottom-4 right-3 z-10"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsMuted(!isMuted);
        }}
      >
        {isMuted ? (
          <VolumeOffIcon className="fill-white h-7 w-7" />
        ) : (
          <VolumeOnIcon className="fill-white h-7 w-7" />
        )}
      </button>
    </div>
  );
};

export default Video;
