import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import Label from "@mui/icons-material/Label";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./linksCards.css";

import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
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
  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <Link
        to="javascript:void(0)"
        onClick={() => (window.location = "mailto:marivone.vieira@gmail.com")}
        target="_blank"
        className="Link"
        data-testid="email-link"
      >
        <StyledTreeItem
          nodeId="1"
          labelText="Meu e-mail"
          labelIcon={MailIcon}
        />
      </Link>
      <StyledTreeItem nodeId="3" labelText="Outras opções" labelIcon={Label}>
        <a
          href="https://pt.linkedin.com/in/marivone-vieira-araujo"
          target="_blank"
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
          className="Link"
          data-testid="medium-link"
        >
          <StyledTreeItem
            nodeId="7"
            labelText="Leia no Medium"
            labelIcon={ForumIcon}
            color="#a250f5"
            bgColor="#f3e8fd"
          />
        </a>

        <a
          href="https://github.com/MarivoneAraujo"
          target="_blank"
          className="Link"
          data-testid="github-link"
        >
          <StyledTreeItem
            nodeId="8"
            labelText="Meu Github"
            labelIcon={FaGithub}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
        </a>
      </StyledTreeItem>

      <a
        href="https://medium.com/@marivone.vieira"
        target="_blank"
        className="Link"
      >
        <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
      </a>
    </TreeView>
  );
}
