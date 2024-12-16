import { useEffect, useRef, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Text } from "../Base";
import { AudioPlayerPropsType } from "./types";
import {
  StyledContainer,
  StyledAudioSliderContainer,
  StyledAudioBar,
  StyledTimeContainer,
  StyledButtonContainer,
  StyledButton,
} from "./styles";

function AudioPlayer(props: AudioPlayerPropsType) {
  const [duration, setDuration] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(props.currentTime);
  const audioRef = useRef(new Audio());

  // Update the audio source when props.src changes
  useEffect(() => {
    const audio = audioRef.current;
    if (props.src) {
      audio.src = props.src;
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      props.setCurrentTime(Math.floor(audio.currentTime));

      // Pause the audio when it reaches endTime
      if (audio.currentTime >= props.endTime) {
        audio.pause();
        props.setIsPlaying(false);
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [props.src, props.endTime]);

  // Sync slider position with currentTime from AudioPlayer
  useEffect(() => {
    setThumbPosition(props.currentTime);
  }, [props.currentTime]);

  // Play/Pause behavior and handle startTime
  useEffect(() => {
    const audio = audioRef.current;
    if (props.isPlaying) {
      audio.currentTime = props.startTime; // Start playback from startTime
      audio.play();
    } else {
      audio.pause();
    }
  }, [props.isPlaying, props.startTime]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Array.isArray(newValue) ? newValue[0] : newValue;
      props.setCurrentTime(audioRef.current.currentTime);
      setThumbPosition(newValue as number);
      props.onTimeChange(newValue as number);
    }
  };

  const formatDuration = (value: number) => {
    const minute = Math.floor(value / 60);
    const secondLeft = Math.floor(value % 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  const _renderAudioSlider = () => {
    return (
      <StyledAudioSliderContainer>
        <StyledAudioBar
          aria-label="time-indicator"
          value={thumbPosition}
          min={0}
          max={Math.floor(duration)}
          step={1}
          onChange={handleSliderChange}
        />
        <StyledTimeContainer>
          <Text>{formatDuration(thumbPosition)}</Text>
          <Text>{'-' + formatDuration(Math.floor(duration - thumbPosition))}</Text>
        </StyledTimeContainer>
      </StyledAudioSliderContainer>
    );
  };

  const _renderPlayButton = () => {
    return (
      <StyledButtonContainer>
        {props.isPlaying ? (
          <StyledButton onClick={() => props.setIsPlaying(false)}>
            <PauseIcon />
          </StyledButton>
        ) : (
          <StyledButton onClick={() => props.setIsPlaying(true)}>
            <PlayArrowIcon />
          </StyledButton>
        )}
      </StyledButtonContainer>
    );
  };

  return (
    <StyledContainer>
      {_renderPlayButton()}
      {_renderAudioSlider()}
    </StyledContainer>
  );
}

export default AudioPlayer;
