import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import BitCoinSVG from "@/components/common/svg_icons/BitCoinSVG";
import EthereumSVG from "@/components/common/svg_icons/EthereumSVG";
import PointerIcon from "@/components/common/svg_icons/PointerIcon";
import { mockBetsData } from "../../sections/home/components/bets-components/mock-bets-data";

interface BetItem {
  game: string;
  user: string;
  time: string;
  betAmount: string;
  multiplier: string;
  payout: string;
  _id: string;
  type: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: { xs: "8px 4px", sm: "8px" },
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white,
    padding: { xs: "8px 4px", sm: "8px" },
    borderBottom: "none",
    whiteSpace: "nowrap",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.grey[900],
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: "48px",
}));

interface CustomizedBetsTableProps {
  data?: BetItem[]; // Optional prop to allow external data
}

const CustomizedBetsTable: React.FC<CustomizedBetsTableProps> = ({
  data = mockBetsData,
}) => {
  const theme = useTheme();

  return (
    <Table
      sx={{ minWidth: 700, tableLayout: "auto" }}
      aria-label="customized bets table"
    >
      <TableHead>
        <TableRow>
          <StyledTableCell
            sx={{ minWidth: { xs: "100px", sm: "150px" }, width: "20%" }}
          >
            Game
          </StyledTableCell>
          <StyledTableCell
            align="left"
            sx={{ minWidth: { xs: "80px", sm: "120px" }, width: "20%" }}
          >
            User
          </StyledTableCell>
          <StyledTableCell
            align="right"
            sx={{ minWidth: { xs: "80px", sm: "100px" }, width: "15%" }}
          >
            Time
          </StyledTableCell>
          <StyledTableCell
            align="right"
            sx={{ minWidth: { xs: "100px", sm: "120px" }, width: "20%" }}
          >
            Bet Amount
          </StyledTableCell>
          <StyledTableCell
            align="right"
            sx={{ minWidth: { xs: "80px", sm: "100px" }, width: "15%" }}
          >
            Multiplier
          </StyledTableCell>
          <StyledTableCell
            align="right"
            sx={{ minWidth: { xs: "100px", sm: "120px" }, width: "20%" }}
          >
            Payout
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <StyledTableRow key={row._id}>
            <StyledTableCell component="th" scope="row">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <PointerIcon />
                {row.game}
              </Box>
            </StyledTableCell>
            <StyledTableCell align="left">{row.user}</StyledTableCell>
            <StyledTableCell align="right">{row.time}</StyledTableCell>
            <StyledTableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {row.betAmount}{" "}
                {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
              </Box>
            </StyledTableCell>
            <StyledTableCell align="right">{row.multiplier}</StyledTableCell>
            <StyledTableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  color: row.payout.startsWith("-")
                    ? theme.palette.common.white
                    : theme.palette.success.main,
                }}
              >
                {row.payout}{" "}
                {row.type === "bitcoin" ? <BitCoinSVG /> : <EthereumSVG />}
              </Box>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomizedBetsTable;
