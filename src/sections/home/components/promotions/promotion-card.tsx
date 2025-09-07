import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PromotionItem } from "./promotions-container";
import { useTheme } from "@mui/material/styles";

function PromotionCard({ item }: { item: PromotionItem }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: theme.spacing(1.25),
        background: theme.palette.background.secondary,
        p: { xs: theme.spacing(2), sm: theme.spacing(3) },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacing(2),
        width: "100%",
        minWidth: { xs: theme.spacing(37.5), sm: theme.spacing(49)},
        maxWidth: { xs: theme.spacing(37.5), sm: theme.spacing(49)},
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
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
              background: theme.palette.background.badge,
              borderRadius: theme.spacing(0.25),
              height: theme.spacing(4),
              textAlign: "center",
              padding: theme.spacing(0.5, 1),
              fontSize: theme.spacing(1.5),
              fontWeight: theme.typography.h3.fontWeight,
              width: "fit-content",
              color: theme.palette.primary.contrastText,
              mb: 2,
            }}
          >
            {item?.type}
          </Typography>
          <Typography
            sx={{
              fontSize: theme.typography.body1.fontSize,
              fontWeight: theme.typography.h3.fontWeight,
              color: theme.palette.primary.contrastText,
              mb: theme.spacing(0.5),
            }}
          >
            {item?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: theme.typography.body2.fontSize,
              color: theme.typography.body2.color,
            }}
          >
            {item?.subTitle}
          </Typography>
        </Box>
        <Link href={`${item?.href}`} className="border-none">
          <Typography
            sx={{
              fontSize: theme.typography.body2.fontSize,
              color: theme.palette.primary.contrastText,
              fontWeight: theme.typography.h3.fontWeight,
            }}
          >
            Read More
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          borderRadius: theme.spacing(0.25),
          height: theme.spacing(17.5),
          width: theme.spacing(17.5),
          minWidth: theme.spacing(17.5),
        }}
      >
        <Image
          src={item?.image}
          alt={`${item?.title}`}
          width={140}
          height={140}
          placeholder="blur"
          blurDataURL={item?.blurUrl}
        />
      </Box>
    </Box>
  );
}

export default PromotionCard;
