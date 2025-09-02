import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PromotionItem } from "./PromotionsContainer";

function PromotionCard({ item }: { item: PromotionItem }) {
  return (
    <Box
      sx={{
        borderRadius: 1,
        background: "var(--background-card)",
        p: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        width: "100%",
        minWidth: { xs: "300px", sm: "392px" },
        maxWidth: { xs: "300px", sm: "392px" },
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: '100%'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              background: "var(--primary)",
              borderRadius: 2,
              height: '24px',
              textAlign: "center",
              padding: "4px 8px",
              fontSize: "12px",
              fontWeight: "500",
              width: 'fit-content',
              color: "var(--white)",
              mb: 2,
            }}
          >
            {item?.type}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "var(--white)",
              mb: "4px",
            }}
          >
            {item?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "var(--text-gray)",
            }}
          >
            {item?.subTitle}
          </Typography>
        </Box>
        <Link href={`${item?.href}`}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "var(--white)",
              fontWeight: "500",
            }}
          >
            Read More
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          border: "2px solid var(--stroke)",
          height: { xs: "120px", sm: "140px" },
          width: { xs: "120px", sm: "140px" },
        }}
      >
        <Image
          src={item?.image}
          alt={`${item?.title}`}
          width={140}
          height={140}
          placeholder="blur"
          blurDataURL={item?.blurUrl}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          sizes="(max-width: 480px) 120px, 140px"
        />
      </Box>
    </Box>
  );
}

export default PromotionCard;
