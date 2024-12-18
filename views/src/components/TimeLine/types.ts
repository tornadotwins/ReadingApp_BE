type TimeLinePropsType = {
  startTimes: number[];
  duration: number;
  activeStartTime: number;

  setAudioStartTime: (val: number) => void;
  setCurrentAudioHandler: (val: string) => void;
}

export type {
  TimeLinePropsType,
}