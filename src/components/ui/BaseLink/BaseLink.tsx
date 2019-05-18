import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IBaseLinkProps {
  to: string;
}

const BaseLink: React.FunctionComponent<IBaseLinkProps> = props => (
  <StyledLink to={props.to}>{props.children}</StyledLink>
);

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
`;

export default BaseLink;
