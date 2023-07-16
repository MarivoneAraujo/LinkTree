import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import Label from "@mui/icons-material/Label";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./linksCards.css";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaMedium,
} from "react-icons/fa";
import { Link } from "@mui/material";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

export default function LinksCards() {
  const handleClick = (event) => {
    event.preventDefault();
    window.location = "mailto:marivone.vieira@gmail.com";
  };

  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <Link
        onClick={handleClick}
        target="_blank"
        rel="noreferrer"
        className="Link"
        data-testid="email-link"
      >
        <StyledTreeItem nodeId="1" labelText="Meu e-mail" labelIcon={MailIcon} />
      </Link>
      <StyledTreeItem nodeId="3" labelText="Outras opções" labelIcon={Label}>
        <a
          href="https://pt.linkedin.com/in/marivone-vieira-araujo"
          target="_blank"
          rel="noreferrer"
          className="Link"
          data-testid="linkedin-link"
        >
          <StyledTreeItem
            nodeId="5"
            labelText="Linkedin"
            labelIcon={FaLinkedin}
            color="#1a73e8"
            bgColor="#e8f0fe"
          />
        </a>
        <a
          href="https://www.instagram.com/mothercoder/"
          target="_blank"
          rel="noreferrer"
          className="Link"
          data-testid="instagram-link"
        >
          <StyledTreeItem
            nodeId="6"
            labelText="Instagram"
            labelIcon={FaInstagram}
            color="#e3742f"
            bgColor="#fcefe3"
          />
        </a>

        <a
          href="https://medium.com/@marivone.vieira"
          target="_blank"
          rel="noreferrer"
          className="Link"
          data-testid="medium-link"
        >
          <StyledTreeItem
            nodeId="7"
            labelText="Leia no Medium"
            labelIcon={FaMedium}
            color="#a250f5"
            bgColor="#f3e8fd"
          />
        </a>

        <a
          href="https://github.com/MarivoneAraujo"
          target="_blank"
          rel="noreferrer"
          className="Link"
          data-testid="github-link"
        >
          <StyledTreeItem
            nodeId="8"
            labelText="My Github"
            labelIcon={FaGithub}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
        </a>
        <a
          href="https://wa.me/5579999055790?text=Oi, Marivone! Estou pensando em mudar de carreira e preciso de sua ajuda! Podemos marcar um horário para conversar?"
          target="_blank"
          rel="noreferrer"
          className="Link"
          data-testid="whatts-link"
        >
          <StyledTreeItem
            nodeId="9"
            labelText="WhatsApp"
            labelIcon={FaWhatsapp}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
        </a>
      </StyledTreeItem>

      <a
        href="https://www.instagram.com/p/CllhKJku0xW/?img_index=1"
        target="_blank"
        rel="noreferrer"
        className="Link"
      >
        <StyledTreeItem nodeId="4" labelText="Minha história" labelIcon={Label} />
      </a>
    </TreeView>
  );
}
