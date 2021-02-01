import styled from "styled-components";


export const Wrapper = styled.div`
  display: grid;
  width: 100vw;

  height: 100vh;
  grid-template-columns: 15% 1fr;
  grid-template-rows: 20% 1fr;
  grid-template-areas:
    "a b"
    "a c";

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 15% 10% 75%;
    grid-template-areas:
      "a"
      "b"
      "c";
  }
`;

export const Col1 = styled.div`
  grid-area: a;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f49301;
  color: #721cc9;

  h2 {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: clamp(1.5em, 4vw, 2.5em);
    letter-spacing: 0.8em;
    text-transform: uppercase;
    text-shadow: -4px -4px 0px #fff;
  }

  @media screen and (max-width: 768px) {
    h2 {
      writing-mode: horizontal-tb;
      text-orientation: sideways;
      padding-left: 1em;
    }
  }
`;

export const Col2 = styled.div`
  grid-area: b;
  display: flex;
  justify-content: flex-start;
  align-items: center;


.wrapper {
  display: flex;
  
}
  .btn {
    position: relative;
    

  }

  .active {
    position: absolute;
    width: 150px;
    bottom: 0;
    height: 5px;
    background: #721cc9;
    left: 28%;
    
  }
  button {
    outline: none;
    border: none;
    background: none;
    font-size: 2em;
    margin-left: 1.5em;
    text-transform: uppercase;
    padding-bottom: 0.3em;
    cursor: pointer;

    /* &:hover {
      border-bottom: 3.8px solid #721cc9;
    } */
  }

  /* button:first-child {
    border-bottom: ${({ website }) =>
      website ? "3.8px solid #721cc9" : "none"};
  }

  button:nth-child(2) {
    border-bottom: ${({ webapp }) => (webapp ? "3.8px solid #721cc9" : "none")};
  } */

  @media screen and (max-width: 768px) {
    button {
      font-size: 1.5em;
    }
    .active {
      width: 100px;
    }
  }
`;

export const Col3 = styled.div`
  grid-area: c;
  overflow: auto;
`;

export const ColWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 1em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1.5em;
  background-color: #000;
  overflow: auto;

@media screen and (max-width: 400px) {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: .5em;
}
  .slide {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.4em;
  }

  .slide img {
    display: inline-block;
    vertical-align: middle;
  }

  .slide-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: inherit;
    height: inherit;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background: rgba(244, 147, 1, 0.9);
    padding: 20px;
    flex-direction: column;

    color: #fff;
    box-sizing: border-box;
    transition: transform 0.3s ease;
    font-size: 1.5em;
  }

  .slide-content a {
    color: #fff;
    padding: 0.8em;
    font-size: 2em;
  }
  .content .des {
    font-size: 0.7em;
    padding: 1.2em;
  }

  .slide-content a:hover {
    color: #2f2fa2;
  }

  .slide:hover .slide-content {
    transform: translate(0, 0);
    transition: transform 0.3s ease;
  }

  .slide-bottom .slide-content {
    transform: translate(0, 120%);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1.8em;
  }
`;
