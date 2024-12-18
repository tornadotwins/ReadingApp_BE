import { useEffect } from "react";
import {
  StyledTimeLineProgressContainer,
  StyledRedBar
} from "./styles";
import { TimeLinePropsType } from "./types";

function TimeLine(props: TimeLinePropsType) {
  const handleClick = (event: React.MouseEvent) => {
    const container = event.currentTarget as HTMLElement;
    const clickPosition = event.clientX - container.getBoundingClientRect().left; // Position relative to container

    // Find the startTime corresponding to the clicked position
    let clickedStartTime = null;

    for (let i = 0; i < props.startTimes.length; i++) {
      // Calculate the position of each red bar (left position)
      const barPosition = (props.startTimes[i] / props.duration) * container.offsetWidth;

      // Calculate the next bar's position (right position)
      const nextBarPosition = i + 1 < props.startTimes.length
        ? (props.startTimes[i + 1] / props.duration) * container.offsetWidth
        : container.offsetWidth;

      // Check if the click position is between the left and right positions of this red bar
      if (clickPosition >= barPosition && clickPosition < nextBarPosition) {
        clickedStartTime = props.startTimes[i];
        break;
      }
    }

    // You can log or handle the clicked startTime here
    props.setAudioStartTime(clickedStartTime || 0);
  };

  useEffect(() => {
    props.setAudioStartTime(props.activeStartTime);
  }, [props.activeStartTime]);

  return (
    <StyledTimeLineProgressContainer onClick={handleClick}>
      {props.startTimes.map((startTime, index) => (
        <StyledRedBar
          key={index}
          isactive={startTime === props.activeStartTime ? 'true' : 'false'}
          style={{
            left: `${(startTime / props.duration) * 100}%`, // Position the bar based on the startTime
          }}
        />
      ))}
    </StyledTimeLineProgressContainer>
  );
}

export default TimeLine;
