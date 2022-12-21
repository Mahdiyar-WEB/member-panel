import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <article className="container px-4 my-5" id="faq">
      <h1 className="text-center text-capitalize fw-bold mb-4">
        Your right to know
      </h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ fontWeight: "500" }}>
            Can i order fake members for the group?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can order fake members for both the channel and the group.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ fontWeight: "500" }}>
            Does it have to be a public channel or group to place an order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, you can place an order for non-private links.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ fontWeight: "500" }}>
            Can we place an order for any channel with any theme?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes you can place an order for all items.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ fontWeight: "500" }}>
            Why are some orders slow and some fast?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Because some channels are temporarily restricted temporarily by
            Telegram, and the order starts automatically after the restriction
            is lifted again.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ fontWeight: "500" }}>
            Can i place an order at any time od the day or night?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can place an order at any time and it starts immediately.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </article>
  );
};

export default FAQ;
