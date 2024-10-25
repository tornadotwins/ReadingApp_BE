import { Pagination } from '@mui/material';
import { PaginationProps } from './types';

function PaginationButtons(props: PaginationProps) {
  return (
    <Pagination
      count={props.count}
      hidePrevButton={props.hideNextButton}
      hideNextButton={props.hideNextButton}
      page={props.page}
      siblingCount={0}
      boundaryCount={1}
      onChange={props.onChange}
    />
  );
}

export default PaginationButtons;
