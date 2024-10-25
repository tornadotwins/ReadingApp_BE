import { StyledContainer } from './styled';
import { Bars } from 'react-loader-spinner';

function LoadingOverlay() {
  return (
    <StyledContainer>
      <Bars width={50} height={50} color={'white'} />
    </StyledContainer>
  );
}

export default LoadingOverlay;
