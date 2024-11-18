import { Box, styled } from "@mui/material";

const StyledQuranContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: "2px",
});

const StyledIntroContainer = styled(Box)({
  marginRight: "3px",
});

const StyledChapterContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "2px",
  justifyContent: "flex-start",
  maxWidth: "480px",
});

export {
  StyledQuranContainer,
  StyledIntroContainer,
  StyledChapterContainer,
};
