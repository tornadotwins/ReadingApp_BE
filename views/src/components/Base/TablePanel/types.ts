type TableRowType = {
  [key: string]: string | JSX.Element;
};

type TableType = {
  headers: string[];
  rows: TableRowType[];
};

export type {
  TableRowType,
  TableType,
};