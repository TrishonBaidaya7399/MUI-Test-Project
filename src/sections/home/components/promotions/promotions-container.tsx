"use client";
import dynamic from "next/dynamic";
import { Box, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

const PromotionCard = dynamic(() => import("./promotion-card"));
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
  const theme = useTheme();
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
  // new theme implemented
  return (
    <Box
      sx={{ mb: theme.spacing(3.75), width: "100%", boxSizing: "border-box" }}
      className="app-container"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: theme.spacing(2),
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.contrastText,
            fontSize: theme.spacing(2.25),
          }}
        >
          {title}
        </Typography>
        <Box>
          <IconButton
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            sx={{
              color: canScrollLeft
                ? theme.palette.primary.contrastText
                : theme.palette.background.badge,
              borderRadius: theme.spacing(0.5),
              border: `${theme.spacing(0.125)} solid ${
                theme.palette.primary.contrastText
              }`,
              padding: 0,
              height: theme.spacing(2.5),
              width: theme.spacing(2.5),
              marginRight: theme.spacing(1),
              "&:disabled": {
                borderColor: theme.palette.background.badge,
                "& svg": { color: theme.palette.background.badge },
              },
            }}
          >
            <Icon icon="mdi:chevron-left"  width={theme.spacing(2.5)} height={theme.spacing(2.5)} />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            sx={{
              color: canScrollRight
                ? theme.palette.primary.contrastText
                : theme.palette.background.badge,
              borderRadius: theme.spacing(0.5),
              border: `${theme.spacing(0.125)} solid ${
                theme.palette.primary.contrastText
              }`,
              padding: 0,
              height: theme.spacing(2.5),
              width: theme.spacing(2.5),
              "&:disabled": {
                borderColor: theme.palette.background.badge,
                "& svg": { color: theme.palette.background.badge },
              },
            }}
          >
            <Icon icon="mdi:chevron-right"  width={theme.spacing(2.5)} height={theme.spacing(2.5)} />
          </IconButton>
        </Box>
      </Box>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: theme.spacing(2),
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          width: "100%",
          boxSizing: "border-box",
          flexWrap: "nowrap",
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(0, 1),
          },
          [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0, 0.5),
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
