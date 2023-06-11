import React from "react";
import { render } from "@testing-library/react";
import LinksCards from "./linksCards";

test("renders the GmailTreeView component", () => {
  const { getByTestId } = render(<LinksCards />);

  const emailLink = getByTestId("email-link");
  const linkedinLink = getByTestId("linkedin-link");
  const instagramLink = getByTestId("instagram-link");
  const mediumLink = getByTestId("medium-link");
  const githubLink = getByTestId("github-link");
  const whattsLink = getByTestId("whatts-link");

  expect(emailLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
  expect(instagramLink).toBeInTheDocument();
  expect(mediumLink).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
  expect(whattsLink).toBeInTheDocument();
});
