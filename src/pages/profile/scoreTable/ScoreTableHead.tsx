import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { cellStyle } from "./utils";
import { HeadCell, EnhancedTableProps } from "./types";
import { ScoreType } from "utils/getUsersFromLocalStorage";

const headCells: readonly HeadCell[] = [
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date of game",
  },
  {
    id: "score",
    numeric: true,
    disablePadding: false,
    label: "Score",
  },
  {
    id: "maxLevel",
    numeric: true,
    disablePadding: false,
    label: "Level",
  },
  {
    id: "answeredQuestions",
    numeric: true,
    disablePadding: false,
    label: "Number of answered questions",
  },
];

const ScoreTableHead = ({
  order,
  orderBy,
  onRequestSort,
}: EnhancedTableProps) => {
  const createSortHandler =
    (property: keyof ScoreType) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={cellStyle}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ScoreTableHead;
