type TableRowType = {
  [key: string]: string;
};

type TableType = {
  headers: string[];
  rows: TableRowType[];
};

export type {
  TableRowType,
  TableType,
};