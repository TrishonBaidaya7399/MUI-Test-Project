"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import trendingData from "@/lib/data/trending.json";
import TopBar from "./TopBar";
import TrendingSection from "./TrendingSection";

export default function TrendingContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const filteredGames = trendingData.trendingGames.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSports = trendingData.trendingSports.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className="app-container">
      <TopBar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
      {filteredGames.length > 0 && (
        <TrendingSection
          title="Trending Games"
          items={filteredGames}
          searchTerm={searchTerm}
        />
      )}
      {filteredSports.length > 0 && (
        <TrendingSection
          title="Trending Sports"
          items={filteredSports}
          searchTerm={searchTerm}
        />
      )}
    </Box>
  );
}
