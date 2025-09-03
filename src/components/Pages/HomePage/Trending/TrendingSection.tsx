"use client";
import { Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";
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
      const cardWidth = 200; // Pixel width of each card
      const gap = 16; // Gap between cards
      const scrollAmount = cardWidth + gap;
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
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // Small threshold to avoid edge case
    }
  };

  useEffect(() => {
    checkScroll();
  }, [filteredItems]);

  return (
    <Box sx={{ mb: "30px", width: "100%", boxSizing: "border-box" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          // px: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "var(--white)", fontSize: "18px" }}
        >
          {title}
        </Typography>
        <Box>
          <IconButton
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            sx={{
              color: canScrollLeft ? "var(--white)" : "var(--placeholder)",
              borderRadius: "4px",
              border: "1px solid var(--white-3)",
              padding: "0px",
              height: "20px",
              width: "20px",
              marginRight: "8px",
              "&:disabled": {
                borderColor: "var(--placeholder)",
                "& svg": { color: "var(--placeholder)" },
              },
            }}
          >
            <Icon icon="mdi:chevron-left" width={20} height={20} />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            sx={{
              color: canScrollRight ? "var(--white)" : "var(--placeholder)",
              borderRadius: "4px",
              border: "1px solid var(--white-3)",
              padding: "0px",
              height: "20px",
              width: "20px",
              "&:disabled": {
                borderColor: "var(--placeholder)",
                "& svg": { color: "var(placeholder)" },
              },
            }}
          >
            <Icon icon="mdi:chevron-right" width={20} height={20} />
          </IconButton>
        </Box>
      </Box>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: "16px",
          // padding: "0 16px ",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          width: "100%",
          boxSizing: "border-box",
        }}
        onScroll={checkScroll}
      >
        {filteredItems.map((item) => (
          <GameCard
            key={item.title}
            rank={item.rank}
            title={item.title}
            image={item.image}
            players={item.players}
            category={item.category}
          />
        ))}
      </Box>
    </Box>
  );
}
