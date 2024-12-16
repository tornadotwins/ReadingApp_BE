type AudioPlayerPropsType = {
  src: string;
  startTime: number;
  endTime: number;
  currentTime: number;
  isPlaying: boolean;

  setCurrentTime: (time: number) => void;
  setIsPlaying: (isPlay: boolean) => void;
  onTimeChange: (time: number) => void;
}

export type {AudioPlayerPropsType}