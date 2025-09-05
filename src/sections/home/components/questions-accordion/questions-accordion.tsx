"use client";
import dynamic from 'next/dynamic';
import React from "react";
import questionsData from "@/services/data/questions.json";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export const generateMetadata = async () => {
  const questions = questionsData.questions;
  const title = `FAQ - Brand Name | ${questions.length} Common Questions Answered`;
  const maxQuestionsInDescription = 3;
  const questionTitles = questions
    .slice(0, maxQuestionsInDescription)
    .map((q) => q.title)
    .join(", ");
  const description =
    questions.length > 0
      ? `Find answers to ${questions.length} frequently asked questions about Brand Name, including ${questionTitles}${questions.length > maxQuestionsInDescription ? ", and more." : "."}`
      : "Explore frequently asked questions about Brand Name, including licensing, safety, betting options, and more.";

  return {
    title,
    description,
  };
};

const QuestionsAccordion = ({ questions = questionsData.questions }) => {
  return (
    <Box sx={{ marginTop: "36px" }} className="app-container">
      <Typography
        variant="h6"
        sx={{
          color: "var(--text-gray)",
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Still Have Questions?
      </Typography>
      {questions.map((question, index) => (
        <Accordion
          key={index}
          disableGutters
          elevation={0}
          sx={{
            backgroundColor: "var(--card-background1)",
            marginBottom: "10px",
            borderRadius: "10px",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: "10px 0",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "var(--text-gray)" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              padding: "16px",
              backgroundColor: "var(--card-background1)",
              borderRadius: "10px",
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
              "&.Mui-expanded": {
                borderRadius: "10px 10px 0 0",
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "var(--white)",
                fontWeight: 500,
                fontSize: "16px",
               
              }}
            >
              {question.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "16px",
              pt: 0,
              backgroundColor: "var(--card-background1)",
              borderBottomLeftRadius: "var(--radius-md)",
              borderBottomRightRadius: "var(--radius-md)",
              borderRadius: "0 0 10px 10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "var(--text-gray)",
              }}
            >
              {question.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default QuestionsAccordion;
