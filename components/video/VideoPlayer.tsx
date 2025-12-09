'use client';

import * as React from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export interface VideoPlayerRef {
  play: () => void;
}

export const VideoPlayer = React.forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ src, poster, className }, ref) => {
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
      // If video hasn't been loaded yet, load it first
      if (!shouldLoad) {
        setShouldLoad(true);
        return;
      }

      // Once video is loaded, toggle play/pause
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          setIsLoading(true);
          videoRef.current.play().catch(() => {
            setIsLoading(false);
          });
        }
      }
    };

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    // Expose play method via ref
    React.useImperativeHandle(ref, () => ({
      play: () => {
        if (!shouldLoad) {
          setShouldLoad(true);
        } else if (videoRef.current && !isPlaying) {
          setIsLoading(true);
          videoRef.current.play().catch(() => {
            setIsLoading(false);
          });
        }
      },
    }));

    // Calculate aspect ratio: 1576/980 = 1.608
    const aspectRatio = 1576 / 980;

    return (
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl bg-zinc-900',
          'min-h-[300px]',
          className
        )}
        style={{
          aspectRatio: aspectRatio.toString(),
        }}
      >
        {shouldLoad && (
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
        )}
        {!shouldLoad && (
          <>
            {poster ? (
              <Image
                src={poster}
                alt='Video thumbnail'
                fill
                className='pointer-events-none object-cover'
                priority
                fetchPriority='high'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px'
              />
            ) : (
              <div className='absolute inset-0 flex items-center justify-center bg-zinc-800'>
                <Play className='h-16 w-16 text-zinc-400' />
              </div>
            )}
          </>
        )}
        {!isPlaying && (
          <button
            type='button'
            onClick={togglePlay}
            className='absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30'
            aria-label='Play video'
          >
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform hover:scale-110'>
              {isLoading ? (
                <div className='h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-indigo-600' />
              ) : (
                <Play
                  className='ml-1 h-10 w-10 text-indigo-600'
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
            className='absolute bottom-4 left-4 z-10 flex items-center justify-center rounded-full bg-black/70 p-3 text-white transition-opacity hover:bg-black/90'
            aria-label='Pause video'
          >
            <Pause className='h-5 w-5' />
          </button>
        )}
      </div>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';
