"use client";
import dynamic from 'next/dynamic';
import { Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";

const PromotionCard = dynamic(() => import('./PromotionCard'));
export interface PromotionItem {
  type: string;
  title: string;
  subTitle: string;
  href: string;
  image: string;
  blurUrl?: string;
  _id: string;
}

interface PromotionsProps {
  title: string;
  items: PromotionItem[];
}

export default function PromotionsContainer({ title, items }: PromotionsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(392);

  useEffect(() => {
    const updateCardWidth = () => {
      if (scrollRef.current && scrollRef.current.firstChild) {
        // @ts-expect-error: ''
        setCardWidth(scrollRef.current.firstChild.clientWidth);
      }
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const gap = 16;
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
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <Box sx={{ mb: "30px", width: "100%", boxSizing: "border-box" }} className='app-container'>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
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
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          width: "100%",
          boxSizing: "border-box",
          flexWrap: "nowrap",
          maxWidth: "100vw",
          "@media (max-width: 768px)": {
            padding: "0 8px",
          },
          "@media (max-width: 480px)": {
            padding: "0 4px",
          },
        }}
        onScroll={checkScroll}
      >
        {items.map((item) => (
          <PromotionCard item={item} key={item._id} />
        ))}
      </Box>
    </Box>
  );
}
