"use client";
import { Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import GameCard from "./GameCard";

interface TrendingItem {
  rank: number;
  title: string;
  image: string;
  players: number;
  category: string;
}

interface TrendingSectionProps {
  title: string;
  items: TrendingItem[];
  searchTerm: string;
}

export default function TrendingSection({
  title,
  items,
  searchTerm,
}: TrendingSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const newScroll =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  return (
    <Box sx={{ mb:'30px' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: "#ffffff" }}>
          {title}
        </Typography>
        <Box>
          <IconButton
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            sx={{
              color: "#ffffff",
              borderRadius: 1,
              border: "1px solid var(--border)",
              padding: '2px',
            }}
          >
            <Icon icon="mdi:chevron-left" />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            sx={{
              color: "#ffffff",
              borderRadius: 1,
              border: "1px solid var(--border)",
              padding: '2px',
            }}
          >
            <Icon icon="mdi:chevron-right" />
          </IconButton>
        </Box>
      </Box>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
        onScroll={checkScroll}
      >
        {filteredItems.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </Box>
    </Box>
  );
}
