import { ScoreType } from "utils/getUsersFromLocalStorage";

// export interface Data {
//   calories: number;
//   carbs: number;
//   fat: number;
//   name: string;
//   protein: number;
// }
export interface HeadCell {
  disablePadding: boolean;
  id: keyof ScoreType;
  label: string;
  numeric: boolean;
}

export type Order = "asc" | "desc";

export interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ScoreType
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
