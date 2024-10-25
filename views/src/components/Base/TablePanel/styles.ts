import { Box, styled, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const StyledTableRow = styled(TableRow) ({
  boxSizing: 'border-box',


  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
});

const StyledTableHead = styled(TableHead)({
  '& tr': {
    boxSizing: 'border-box',
    backgroundColor: 'white',
  },

  '& th' : {
    boxSizing: 'border-box',
    backgroundColor: '#F0F5FB',
    border: '2px solid white'
  }
});

const StyledTableHeadCell = styled(TableCell)({
  
});

const StyledTableBody = styled(TableBody)({
  '& tr:nth-of-type(odd)': {
    backgroundColor: '#FFF',
  },

  '& tr:nth-of-type(even)': {
    backgroundColor: '#F0F5FB',
  },

})

const StyledTableBodyCell = styled(TableCell) ({
  boxSizing: 'border-box',
  border: 'none',
  padding: '7px 18px',
  justifyContent: 'space-between',

  '& .MuiBox-root': {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center'
  },

  '& .MuiInputBase-root': {
    border: '1px solid #155D74',
    
    '& .MuiBox-root': {
      color: '#155D74 !important',
      fontFamily: '"Baloo Da 2" !important',
      fontSize: '16px !important',
      fontWeight: '400 !important',
      lineHeight: '24px !important',
    },
    '& .MuiSvgIcon-root': {
      fill: '#155D74',
    }
  }
});

const StyledActionButtonGroup = styled(Box) ({
  display: 'flex',

  '& >.MuiBox-root: first-of-type': {
    marginRight: '15px'
  }
})

const StyledActionButton = styled(Box) ({
  padding: '0px',
  boxSizing: 'border-box',

  '& > .MuiBox-root': {
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  }
})

export {
  StyledTableRow,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody,
  StyledTableBodyCell,
  StyledActionButtonGroup,
  StyledActionButton,
}