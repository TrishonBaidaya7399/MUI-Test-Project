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
} from "@mui/material";
import { useState } from "react";
import { mockBetsData } from "./mockBetsData";
import BitCoinSVG from "@/components/svg_icons/BitCoinSVG";
import EthereumSVG from "@/components/svg_icons/EthereumSVG";

interface BetItem {
  game: string;
  user: string;
  time: string;
  betAmount: string;
  multiplier: string;
  payout: string;
  _id: string;
}

const BetsTable = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (
    event: React.SyntheticEvent | null,
    newValue: number
  ) => {
    setSelectedTab(newValue);
  };

  const renderTableData = () => {
    const data = mockBetsData;
    return data.map((row) => (
      <TableRow
        key={row._id}
        sx={{
          "&:nth-of-type(odd)": { backgroundColor: "var(--background-card)" },
          "&:nth-of-type(even)": { backgroundColor: "var(--background-dark)" },
          height: "48px",
          marginTop: {lg: '36px', x: '16px'}
        }}
      >
        <TableCell
          sx={{ color: "var(--white)", padding: "8px", borderBottom: "none" }}
        >
          {row.game}
        </TableCell>
        <TableCell
          sx={{ color: "var(--white)", padding: "8px", borderBottom: "none" }}
        >
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
          {row?.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
        </TableCell>
        <TableCell
          sx={{ color: "var(--white)", padding: "8px", borderBottom: "none" }}
        >
          {row.multiplier}
        </TableCell>
        <TableCell
          sx={{
            color: row?.payout.startsWith("-")
              ? "var(--white)"
              : "var(--green)",
            padding: "8px",
            borderBottom: "none",
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          {row.payout}{" "}
          {row?.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Box sx={{ background: "var(--background-dark)" }}>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          mb: "10px",

          padding: "8px",
          background: "var(--foreground)",
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{
            color: "var(--white)",
            fontSize: "14px",
            fontWeight: 500,
            padding: "10px 14px",
            backgroundColor:
              selectedTab === 0 ? "var(--primary)" : "transparent",
            borderRadius: 1,
            cursor: "pointer",
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
              selectedTab === 1 ? "var(--primary)" : "transparent",
            borderRadius: 1,
            cursor: "pointer",
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
              selectedTab === 2 ? "var(--primary)" : "transparent",
            borderRadius: 1,
            cursor: "pointer",
          }}
          onClick={() => handleTabChange(null, 2)}
        >
          Race Leaderboard
        </Typography>
      </Box>
      <Table
        sx={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}
      >
        <TableHead>
          <TableRow
            sx={{ backgroundColor: "var(--background-dark)", height: "48px" }}
          >
            <TableCell
              sx={{
                color: "var(--text-gray)",
                padding: "8px",
                borderBottom: "none",
                fontWeight: 500,
              }}
            >
              Game
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-gray)",
                padding: "8px",
                borderBottom: "none",
                fontWeight: 500,
              }}
            >
              User
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-gray)",
                padding: "8px",
                borderBottom: "none",
                fontWeight: 500,
              }}
            >
              Time
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-gray)",
                padding: "8px",
                borderBottom: "none",
                fontWeight: 500,
              }}
            >
              Bet Amount
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-gray)",
                padding: "8px",
                borderBottom: "none",
                fontWeight: 500,
              }}
            >
              Multiplier
            </TableCell>
            <TableCell
              sx={{
                color: "var(--text-gray)",
                padding: "8px",
                borderBottom: "none",
                fontWeight: 500,
              }}
            >
              Payout
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableData()}</TableBody>
      </Table>
    </Box>
  );
};

export default BetsTable;
