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

    if (props.src && audio.src !== props.src) {
      // If the src has changed, load the new audio
      audio.src = props.src;

      // Ensure the audio is ready to play
      audio.load();

      // Reset audio state if src changes
      audio.oncanplaythrough = () => {
        if (props.isPlaying) {
          audio.play();
        }
      };
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      props.setAudioDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      props.setCurrentTime(Math.floor(audio.currentTime));

      // Pause the audio when it reaches endTime
      if (props.endTime && audio.currentTime >= props.endTime) {
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
  }, [props.src, props.isPlaying, props.startTime, props.endTime]);

  // Sync slider position with currentTime from AudioPlayer
  useEffect(() => {
    setThumbPosition(props.currentTime);
  }, [props.currentTime]);

  useEffect(() => {
    props.setCurrentTime(thumbPosition);
  }, [thumbPosition]);

  // Play/Pause behavior and handle startTime
  useEffect(() => {
    const audio = audioRef.current;
    if (props.isPlaying) {
      audio.currentTime = props.startTime; // Start playback from startTime
      audio.play();
    } else {
      audio.pause();
    }
  }, [props.isPlaying, props.startTime, props.endTime]);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const audio = audioRef.current;

    if (audio) {
      const newTime = Array.isArray(newValue) ? newValue[0] : newValue;
      audio.currentTime = newTime; // Update the audio's current time immediately
      setThumbPosition(newTime);
      props.setCurrentTime(newTime);
      props.setStartTime(newTime);
      props.onTimeChange(newTime);
      props.setCurrentAudioHandler('Audio Player');

      // Always play the audio when a point is selected
      audio.play().catch((error) => {
        console.error("Error playing audio after selecting a point:", error);
      });

      // Ensure the playback state is consistent
      props.setIsPlaying(true);
    }
  };

  const handleDragStart = () => {
    const audio = audioRef.current;
    audio.pause();
  };

  const handleDragEnd = () => {
    const audio = audioRef.current;
    audio.play().catch((error) => {
      console.error("Error resuming playback after dragging:", error);
    });
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
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}

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
