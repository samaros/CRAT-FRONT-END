import {
  TableOptions,
  Cell as ReactTableCell,
  Row as ReactTableRow,
} from 'react-table';

export type TableCell<T extends object = {}> = ReactTableCell<T>;
export type TableRow<T extends object = {}> = ReactTableRow<T>;

export interface TableProps<T extends object = {}> extends TableOptions<T> {
  name?: string,
  pageSize?: number,
  withSorting?: boolean,
  withPagination?: boolean,
  className?: string,
  classNameTh?: string,
  classNameRow?: string,
  isLoading?: boolean,
  forcePage?: number,
  count?: number,
  onPageChange?: (value: number) => void,
  initialSortBy?: TableSortBy,
  onSortBy?: (value: TableSortBy) => void,
}

export interface TableRowProps<T extends object = {}> {
  row: ReactTableRow<T>,
  className?: string,
}

export type TableSortBy = Array<{ id: string, desc: boolean }>;
