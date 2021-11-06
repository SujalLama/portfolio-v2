import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: grid;
  justify-items: center;
  align-items: flex-start;

  h2 {
    font-size: clamp(2em, 5vw, 4.5em);
    text-transform: capitalize;
    font-weight: 100;
    margin: 1em 0;
    height: 10vh;
  }

  @media screen and (max-width: 340px) {
    h2 {
      font-size: 1.6em;
    }
  }
`;

export const DesignWrapper = styled.div`
  width: 80%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 1000px) {
    height: 60vh;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  width: 200px;
  height: 200px;

  div {
    width: 150px;
    height: 150px;
    background: #721cc9;
    line-height: 150px;
    border-radius: 50%;
    color: #fff;
    box-shadow: -2px 5px 30px #979797;
    font-size: 3em;
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.4em;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 1000px) {
    p {
      display: none;
      
    }
    div {
      margin-bottom: 0.6em;
    }
  }

  @media screen and (max-width: 500px) {
    width: 150px;
    height: 150px;
    div {
      width: 100px;
      height: 100px;
      line-height: 100px;
    }
  }

   @media screen and (max-width: 340px) {
    width: 100px;
    height: 100px;
    div {
      width: 100px;
      height: 100px;
      line-height: 100px;
    }
  }
`;
