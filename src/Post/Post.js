import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./post.css";

const Post = ({ post, categorySelected }) => {
  if (post.category === categorySelected) {
    console.log("this is working ", post);
  }

  return (
    <>
      {categorySelected === "All" ? (
        <article>
          <Accordion id="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{post.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{post.body}</Typography>
            </AccordionDetails>
          </Accordion>
        </article>
      ) : (
        <>
          {post.category === categorySelected ? (
            <article>
              <Accordion id="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{post.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{post.body}</Typography>
                </AccordionDetails>
              </Accordion>
            </article>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};
export default Post;
