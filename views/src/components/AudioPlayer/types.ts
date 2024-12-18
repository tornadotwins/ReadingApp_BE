type AudioPlayerPropsType = {
  src: string;
  startTime: number;
  endTime: number;
  currentTime: number;
  isPlaying: boolean;

  setCurrentTime: (time: number) => void;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setIsPlaying: (isPlay: boolean) => void;
  setAudioDuration: (duration: number) => void;
  onTimeChange: (time: number) => void;
}

export type {AudioPlayerPropsType}