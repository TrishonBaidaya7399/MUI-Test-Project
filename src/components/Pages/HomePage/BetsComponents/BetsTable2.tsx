"use client";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  styled,
  tableCellClasses,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { mockBetsData } from "./mockBetsData";
import BitCoinSVG from "@/components/svg_icons/BitCoinSVG";
import EthereumSVG from "@/components/svg_icons/EthereumSVG";
import PointerIcon from "@/components/svg_icons/PointerIcon";

interface BetItem {
  game: string;
  user: string;
  time: string;
  betAmount: string;
  multiplier: string;
  payout: string;
  _id: string;
}

const BetsTable2 = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (
    event: React.SyntheticEvent | null,
    newValue: number
  ) => {
    setSelectedTab(newValue);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const renderTableData = () => {
    const data = mockBetsData;
    return data.map((row) => (
      <TableRow
        key={row._id}
        sx={{
          "&:nth-of-type(odd)": { backgroundColor: "var(--background-card)" },
          "&:nth-of-type(even)": { backgroundColor: "var(--background-3)" },
          height: "48px",
          marginTop: { lg: "36px", xs: "16px" },
        }}
      >
        <TableCell
          sx={{
            color: "var(--white)",
            padding: "8px",
            borderBottom: "none",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          <PointerIcon />
          {row.game}
        </TableCell>
        <TableCell
          sx={{
            color: "var(--white)",
            padding: "8px",
            borderBottom: "none",
            // display: "flex",
            // flexDirection: "row",
            // gap: 1,
            // alignItems: "center",
          }}
        >
          {/* <PointerIcon />  */}
          {row.user}
        </TableCell>
        <TableCell
          sx={{ color: "var(--white)", padding: "8px", borderBottom: "none" }}
        >
          {row.time}
        </TableCell>
        <TableCell
          sx={{
            color: "var(--white)",
            padding: "8px",
            borderBottom: "none",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          {row.betAmount}{" "}
          {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
        </TableCell>
        <TableCell
          sx={{ color: "var(--white)", padding: "8px", borderBottom: "none" }}
        >
          {row.multiplier}
        </TableCell>
        <TableCell
          sx={{
            color: row.payout.startsWith("-") ? "var(--white)" : "var(--green)",
            padding: "8px",
            borderBottom: "none",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          {row.payout}{" "}
          {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Box
      sx={{
        backgroundColor: "var(--background-3)",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          mb: "10px",
          padding: "8px",
          backgroundColor: "var(--background-1)",
          borderRadius: 1,
          overflowX: "auto",
          whiteSpace: "nowrap",
          "@media (max-width: 600px)": {
            // flexDirection: "column",
            gap: "8px",
            padding: "4px",
          },
        }}
      >
        <Typography
          sx={{
            color: "var(--white)",
            fontSize: "14px",
            fontWeight: 500,
            padding: "10px 14px",
            backgroundColor:
              selectedTab === 0 ? "var(--white-2)" : "transparent",
            borderRadius: 1,
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => handleTabChange(null, 0)}
        >
          Casino Bets
        </Typography>
        <Typography
          sx={{
            color: "var(--white)",
            fontSize: "14px",
            fontWeight: 500,
            padding: "10px 14px",
            backgroundColor:
              selectedTab === 1 ? "var(--white-2)" : "transparent",
            borderRadius: 1,
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => handleTabChange(null, 1)}
        >
          Sports Bets
        </Typography>
        <Typography
          sx={{
            color: "var(--white)",
            fontSize: "14px",
            fontWeight: 500,
            padding: "10px 14px",
            backgroundColor:
              selectedTab === 2 ? "var(--white-2)" : "transparent",
            borderRadius: 1,
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => handleTabChange(null, 2)}
        >
          Race Leaderboard
        </Typography>
      </Box>
      <Box sx={{ width: "100%", overflow: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">
                  Protein&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockBetsData.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {row.game}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.time}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.betAmount}</StyledTableCell>
                  <StyledTableCell align="right">{row.time}</StyledTableCell>
                  <StyledTableCell align="right">{row.multiplier}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BetsTable2;
