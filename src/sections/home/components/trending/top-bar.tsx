"use client";
import SearchSVG from "@/components/common/svg_icons/SearchSVG";
import {
  Box,
  Select,
  MenuItem,
  TextField,
  FormControl,
} from "@mui/material";
import { useState } from "react";

interface TopBarProps {
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function TopBar({ onSearch, onCategoryChange }: TopBarProps) {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategoryChange = (event: any) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    onCategoryChange(newCategory.toLowerCase());
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchChange = (event: any) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 4,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <FormControl sx={{ minWidth: 120 }}>
        <Select
          labelId="category-label"
          value={category}
          onChange={handleCategoryChange}
          sx={{
            border: 'none',
            color: "var(--white)",
            bgcolor: "var(--background-2)",
            borderRadius: 1,
            height: '40px',
            "& .MuiSelect-icon": { color: "var(--white)" },
          }}
          >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Casino">Casino</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
        </Select>
      </FormControl>
      <TextField
      size="small"
      prefix={`${<SearchSVG/>}`}
        placeholder="Search your game"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          flexGrow: 1,
          // padding: '8px',
          fontSize: '14px',
          height: '40px',
          bgcolor: "var(--background-2)",
          borderRadius: 1,
          "& .MuiInputBase-input": { color: "var(--white)" },
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />
    </Box>
  );
}
