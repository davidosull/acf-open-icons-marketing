'use client';

import * as React from 'react';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Load and play video when shouldLoad becomes true
  React.useEffect(() => {
    if (shouldLoad && videoRef.current) {
      setIsLoading(true);
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  }, [shouldLoad]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Load video only when user clicks play
        if (!shouldLoad) {
          setShouldLoad(true);
        } else {
          setIsLoading(true);
          videoRef.current.play().catch(() => {
            setIsLoading(false);
          });
        }
      }
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900',
        className
      )}
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className='h-full w-full object-cover'
          onLoadedData={handleLoadedData}
          onEnded={handleEnded}
          onPlay={() => {
            setIsPlaying(true);
            setIsLoading(false);
          }}
          onPause={() => setIsPlaying(false)}
          playsInline
          preload='auto'
        />
      ) : (
        poster && (
          <img
            src={poster}
            alt='Video thumbnail'
            className='h-full w-full object-cover'
            loading='lazy'
          />
        )
      )}
      {!isPlaying && (
        <button
          type='button'
          onClick={togglePlay}
          className='absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30'
          aria-label='Play video'
        >
          <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110'>
            {isLoading ? (
              <div className='h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-blue-600' />
            ) : (
              <Play
                className='ml-1 h-10 w-10 text-blue-600'
                fill='currentColor'
              />
            )}
          </div>
        </button>
      )}
      {isPlaying && (
        <button
          type='button'
          onClick={togglePlay}
          className='absolute bottom-4 left-4 flex items-center justify-center rounded-full bg-black/70 p-3 text-white transition-opacity hover:bg-black/90'
          aria-label='Pause video'
        >
          <Pause className='h-5 w-5' />
        </button>
      )}
    </div>
  );
}
