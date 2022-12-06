import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./post.css";

const Post = ({ post, categorySelected }) => {
  // console.log(categorySelected);
  // console.log(post);

  if (post.category === categorySelected) {
    console.log("this is working ", post);
  }

  return (
    <>
      {categorySelected === "All" ? (
        <article>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h2>{post.title}</h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{post.body}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </article>
      ) : (
        <>
          {post.category === categorySelected ? (
            <article>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h2>{post.title}</h2>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>{post.body}</p>
                  </Typography>
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
