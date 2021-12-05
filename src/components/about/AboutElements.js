import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    height: 100vh;
    grid-template-columns: 100vw;
    grid-template-rows: 100vh;
  }
`;

export const Col1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #e4e3e3;

  position: relative;

  h2 {
    color: #721cc9;
    text-shadow: -5px 7px 0px #fff;
    font-size: 2.5em;
    text-align: left;
    width: 60%;
    margin-bottom: 1em;

    @media screen and (max-width: 1024px) {
      position: relative;
      z-index: 500;
      text-shadow: -3px 4px 0px #fff;
    }
  }

  p {
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 1em;
  }
`;

export const Col2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h2 {
    text-align: right;
    font-size: clamp(1.5em, 4vw, 3em);
    padding: 0.5em 0.5em 0.5em 5.5em;
    border: 5px solid #000;
    margin: 1.3em 0.7em 1em 1em;
  }

  @media screen and (max-width: 1024px) {
      display: none;
    }
`;

export const ImageWrapper = styled.div`
  width: 500px;
  height: 520px;
  box-shadow: -18px 18px 0px #999;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: none;
    z-index: 0;
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  text-align: center;
  right: 0;
  bottom: 2em;
  width: 60%;
  height: 50%;
  background: rgba(244, 147, 1, 0.9);
  padding: 0 1em;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p:first-child {
    padding-top: 2em;
  }

  @media screen and (max-width: 1024px) {
    overflow: auto;
    position: relative;
    border-radius: 10px;
    width: 80%;
    height: 80%;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  text-align: center;
  background-color: #000;
  color: #fff;
  padding: 5em;

  ul {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  ul li {
    list-style: none;
    font-size: clamp(1.2em, 4vw, 2em);
    font-weight: bold;
  }
`;
