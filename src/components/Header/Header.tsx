import React from "react";
import styled from "styled-components";

import BaseLink from "../ui/BaseLink";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
  padding: 10px 2em;
`;

const H1 = styled.h1`
  color: ${props => props.theme.colors.textPrimary};
  letter-spacing: 2.5px;
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NAV = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LI = styled.li`
  margin: 0px 10px;
`;

const MyHeader: React.FC = () => {
  return (
    <Header>
      <H1>Memesy</H1>
      <NAV>
        <UL>
          <LI>
            <BaseLink to={"/"}>Home</BaseLink>
          </LI>
          <LI>
            <BaseLink to="/create">Create</BaseLink>
          </LI>
          <LI>
            <BaseLink to="/yours">Your Memes</BaseLink>
          </LI>
        </UL>
      </NAV>
    </Header>
  );
};

export default MyHeader;
