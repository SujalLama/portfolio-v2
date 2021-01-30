import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterWrapper = styled.footer`
  width: 100vw;

  margin-top: 3em;
  background: #000;
  padding: 2em calc(100vw - 90%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: space-between;

    p {
      margin-bottom: 1em;
    }
  }
`;

export const IconMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5em;

  a {
    color: #fff;
    margin-right: 1em;
  }

  a:hover {
    color: #f49301;
  }
`;

export const UpArrow = styled(Link)`
  font-size: 2.5em;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    color: #f49301;
    transform: translateY(-10px);
    transition: transform 0.5s ease-in-out;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 0.5em;
  }
`;
