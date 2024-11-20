import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

const StyledContainer = styled(Box) ({
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  
  '& >.MuiBox-root:first-of-type': {
    backgroundColor: '#1B7695',

    '& >.MuiBox-root': {
      color: '#F6FCFC',
    }
  }
});

const StyledChapterOverviewContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
});

const StyledBookSelectorContainer = styled(Box) ({
  margin: "20px 40px",
});

const StyledTableContainer = styled(Box) ({
  display: "flex",
  justifyContent: 'center',
  margin: '20px 40px',
});

const StyledTable = styled(Table) ({
  width: '100%',
});

const StyledTableBody = styled(TableBody) ({
  width: '100%',

  '& .MuiTableCell-root': {
    border: '1px solid gray',
    padding: '5px'
  }
});

const StyledTableHead = styled(TableHead) ({
  color: '#000',

  '& .MuiTableRow-root': {
    backgroundColor: '#ececec'
  },
  
  '& .MuiTableCell-root': {
    fontWeight: 'bold',
    border: '1px solid gray',
    textAlign: 'center',
    padding: '5px',
  }
});

const StyledTableRow = styled(TableRow) ({
  width: '100%',
});

const StyledTableCell = styled(TableCell) ({
  color: '#000'
})

export {
  StyledContainer,
  StyledChapterOverviewContainer,
  StyledBookSelectorContainer,
  StyledTableContainer,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableRow,
  StyledTableCell,
}
