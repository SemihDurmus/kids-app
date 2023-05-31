import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import { Order } from "./types";
import ScoreTableHead from "./ScoreTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import { ScoreType } from "utils/getUsersFromLocalStorage";
import {
  getComparator,
  stableSort,
  convertToReadibleDate,
  cellStyle,
} from "./utils";

const ScoreTable = ({ scores }: { scores: ScoreType[] }) => {
  const [order, setOrder] = React.useState<Order>("desc");
  const [orderBy, setOrderBy] = React.useState<keyof ScoreType>("score");
  const [page, setPage] = React.useState(0);
  const rows = scores;
  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof ScoreType
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * 10 - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * 10,
        page * 10 + 10
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [order, orderBy, page]
  );

  const scoresArray = scores.map((el) => el.score);
  const bestScore = Math.max(...scoresArray);

  return (
    <Box sx={{ width: "60%", margin: "0 auto", border: "2px solid black" }}>
      <Paper sx={{ width: "100%" }}>
        <EnhancedTableToolbar bestScore={bestScore} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <ScoreTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover tabIndex={-1} key={row.date.toString()}>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="normal"
                      sx={cellStyle}
                    >
                      {convertToReadibleDate(row.date)}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ ...cellStyle, color: "#c23616" }}
                    >
                      {row.score}
                    </TableCell>
                    <TableCell align="right" sx={cellStyle}>
                      {row.maxLevel}
                    </TableCell>
                    <TableCell align="right" sx={cellStyle}>
                      {row.answeredQuestions}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={10}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </Box>
  );
};

export default ScoreTable;
