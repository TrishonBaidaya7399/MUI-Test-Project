"use client";
import dynamic from "next/dynamic";
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
import { mockBetsData } from "./mock-bets-data";

const BitCoinSVG = dynamic(
  () => import("@/components/common/svg_icons/BitCoinSVG")
);
const EthereumSVG = dynamic(
  () => import("@/components/common/svg_icons/EthereumSVG")
);
const PointerIcon = dynamic(
  () => import("@/components/common/svg_icons/PointerIcon")
);

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
            // textAlign: "center",
            // verticalAlign: "middle",
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
            <PointerIcon />
            {row.game}
          </Box>
        </TableCell>
        <TableCell
          sx={{
            color: "var(--white)",
            padding: "8px",
            borderBottom: "none",
          }}
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
            // textAlign: "center",
            // verticalAlign: "middle",
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
            {row.betAmount}{" "}
            {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
          </Box>
        </TableCell>
        <TableCell
          sx={{ color: "var(--white)", padding: "8px", borderBottom: "none" }}
        >
          {row.multiplier}
        </TableCell>
        <TableCell
          sx={{
            color: "var(--white)",
            padding: "8px",
            borderBottom: "none",
            // textAlign: "center",
            // verticalAlign: "middle",
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
            {row.payout}{" "}
            {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
          </Box>
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
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: "16px",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          width: "100%",
          boxSizing: "border-box",
          flexWrap: "nowrap",
          maxWidth: "100%",
          "@media (max-width: 768px)": {
            padding: "0 8px",
          },
          "@media (max-width: 480px)": {
            padding: "0 4px",
          },
        }}
      >
        <Table
          sx={{
            width: "1200px",
            minWidth: "1200px",
            borderCollapse: "separate",
            borderSpacing: 0,
            "@media (max-width: 600px)": {
              minWidth: "1200px",
            },
          }}
        >
          <TableHead>
            <TableRow
              sx={{ backgroundColor: "var(--background-3)", height: "48px" }}
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
    </Box>
  );
};

export default BetsTable;
