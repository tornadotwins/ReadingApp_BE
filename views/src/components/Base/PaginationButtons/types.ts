type PaginationProps = {
  count: number;
  hidePrevButton: boolean;
  hideNextButton: boolean;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

export type { PaginationProps };
