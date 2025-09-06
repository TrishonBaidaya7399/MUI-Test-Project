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
import { theme } from "@/theme/theme";

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
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.paper,
          },
          "&:nth-of-type(even)": {
            backgroundColor: theme.palette.background.default,
          },
          height: theme.spacing(6),
          mt: { lg: theme.spacing(4.5), xs: theme.spacing(2) },
        }}
      >
        <TableCell
          sx={{
            color: theme.palette.text.primary,
            p: theme.spacing(1),
            borderBottom: "none",
            // textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: theme.spacing(1),
            }}
          >
            <PointerIcon />
            {row.game}
          </Box>
        </TableCell>
        <TableCell
          sx={{
            color: theme.palette.text.primary,
            padding: theme.spacing(1),
            borderBottom: "none",
          }}
        >
          {row.user}
        </TableCell>
        <TableCell
          sx={{
            color: theme.palette.text.primary,
            padding: theme.spacing(1),
            borderBottom: "none",
          }}
        >
          {row.time}
        </TableCell>
        <TableCell
          sx={{
            color: theme.palette.text.primary,
            padding: theme.spacing(1),
            borderBottom: "none",
            // textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
            {row.betAmount}{" "}
            {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
          </Box>
        </TableCell>
        <TableCell
          sx={{
            color: theme.palette.text.primary,
            padding: theme.spacing(1),
            borderBottom: "none",
          }}
        >
          {row.multiplier}
        </TableCell>
        <TableCell
          sx={{
            color: theme.palette.text.primary,
            padding: theme.spacing(1),
            borderBottom: "none",
            // textAlign: "center",
            verticalAlign: "middle",
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
        backgroundColor: theme.palette.background.default,
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: theme.spacing(2),
          mb: theme.spacing(1.25),
          padding: theme.spacing(1),
          backgroundColor: theme.palette.background.paper,
          borderRadius: 1,
          overflowX: "auto",
          whiteSpace: "nowrap",
          "@media (max-width: 600px)": {
            // flexDirection: "column",
            gap: theme.spacing(1),
            padding: theme.spacing(0.5),
          },
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            px: theme.spacing(2), // 16px
            py: theme.spacing(1.25), // 10px
            backgroundColor:
              selectedTab === 0 ? theme.palette.action.selected : "transparent",
            borderRadius: theme.shape.borderRadius,
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => handleTabChange(null, 0)}
        >
          Casino Bets
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            px: theme.spacing(2), // 16px
            py: theme.spacing(1.25), // 10px
            backgroundColor:
              selectedTab === 1 ? theme.palette.action.selected : "transparent",
            borderRadius: theme.shape.borderRadius,
            cursor: "pointer",
            display: "inline-block",
          }}
          onClick={() => handleTabChange(null, 1)}
        >
          Sports Bets
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: theme.typography.body2.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            px: theme.spacing(2), // 16px
            py: theme.spacing(1.25), // 10px
            backgroundColor:
              selectedTab === 2 ? theme.palette.action.selected : "transparent",
            borderRadius: theme.shape.borderRadius,
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
          gap: theme.spacing(2),
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          width: "100%",
          boxSizing: "border-box",
          flexWrap: "nowrap",
          maxWidth: "100%",
          "@media (max-width: 768px)": {
            px: theme.spacing(1),
            py: 0
          },
          "@media (max-width: 480px)": {
            px: theme.spacing(0.5),
            py: 0
          },
        }}
      >
        <Table
          sx={{
           width: '100%',
           minWidth: { xs: '100%', md: 1200 },
            borderCollapse: "separate",
            borderSpacing: 0,
            "@media (max-width: 600px)": {
             minWidth: { xs: '100%', md: 1200 },
            },
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: theme.palette.background.default,
                height: theme.spacing(6),
              }}
            >
              <TableCell
                sx={{
                  color: theme.palette.text.secondary,
                  padding: theme.spacing(1),
                  borderBottom: "none",
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                Game
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.text.secondary,
                  padding: theme.spacing(1),
                  borderBottom: "none",
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                User
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.text.secondary,
                  padding: theme.spacing(1),
                  borderBottom: "none",
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                Time
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.text.secondary,
                  padding: theme.spacing(1),
                  borderBottom: "none",
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                Bet Amount
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.text.secondary,
                  padding: theme.spacing(1),
                  borderBottom: "none",
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                Multiplier
              </TableCell>
              <TableCell
                sx={{
                  color: theme.palette.text.secondary,
                  padding: theme.spacing(1),
                  borderBottom: "none",
                  fontWeight: theme.typography.fontWeightMedium,
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
