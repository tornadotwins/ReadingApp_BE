type TableRowType = {
  key: string;
  value: string;
};

type TableType = {
  headers: string[];
  rows: TableRowType[];
};

export type {
  TableRowType,
  TableType,
};
