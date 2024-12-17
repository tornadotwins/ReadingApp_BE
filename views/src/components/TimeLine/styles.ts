import { Box, styled } from "@mui/material";

const StyledTimeLineProgressContainer = styled(Box)({
  display: 'flex',
  backgroundColor: '#007bff',
  borderRadius: '10px',
  height: '10px',
  boxSizing: 'border-box',
  margin: '20px 40px',
  cursor: 'pointer',
  position: 'relative',
});

const StyledRedBar = styled(Box)<{ isactive: string }>(({isactive}) => ({
  position: 'absolute',
  width: '5px', // default width for the red bar
  height: isactive == 'true' ? '20px' : '10px', // Full height of the container
  backgroundColor: isactive == 'true' ? 'orange' : 'red', // Change color when active
  boxShadow: isactive == 'true' ? '0 0 10px 2px rgba(255, 165, 0, 0.5)' : 'none', // Highlight effect when active
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Smooth transition effect
  bottom: isactive == 'true' ? '-5px' : '0px'
}));

export {
  StyledTimeLineProgressContainer,
  StyledRedBar
};
