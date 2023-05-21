import logo from './assets/HGT-logo-master.png';
import styled from 'styled-components';
import './App.css';
import { useState } from 'react';

function App() {
  const [positionX, setPositionX] = useState('-33.3');

  return (
    <Main $positionX={positionX}>
      <div className="container">
        <section>
          <h1>TEST1</h1>
          <div className="button-container">
            <button
              className="btn-nav-main watch"
              onClick={() => setPositionX('-33.3')}
            >
              Back
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="m383 746 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
              </svg>
            </button>
          </div>
        </section>
        <section>
          <img src={logo} alt="heard good things logos" className="logo" />
          <h1>
            Music made by <br />
            positive change
          </h1>
          <div className="button-container">
            <button
              className="btn-nav-main listen"
              onClick={() => setPositionX('0')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="m383 746 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
              </svg>
              Listen
            </button>
            <button
              className="btn-nav-main watch"
              onClick={() => setPositionX('-66.666')}
            >
              Watch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="m383 746 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
              </svg>
            </button>
          </div>
        </section>
        <section>
          <h1>TEST2</h1>
          <div className="button-container">
            <button
              className="btn-nav-main listen"
              onClick={() => setPositionX('-33.3')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="m383 746 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
              </svg>
              Back
            </button>
          </div>
        </section>
      </div>
    </Main>
  );
}

const Main = styled.main<{ $positionX: string }>`
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.colors.colorTheme5};
  overflow: hidden;

  .container {
    width: 300vw;
    display: flex;
    transform: translateX(${(props) => props.$positionX}%);
    transition: 400ms ease-in-out;
  }

  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex: 1;
    max-width: calc(100vw - 1px);

    h1 {
      font-weight: 700;
      font-size: 4rem;
      color: white;
      text-shadow: 2px 2px ${(props) => props.theme.colors.colorTheme2};
    }
  }

  .logo {
    margin-top: 3rem;
    height: 300px;
    width: 300px;
  }

  .button-container {
    position: relative;
    height: 300px;
    width: 100%;
  }

  .btn-nav-main {
    color: white;
    font-weight: 700;
    font-size: 4rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    border: none;

    svg {
      color: white;
      fill: white;
      opacity: 0.3;
      height: 60px;
      width: 60px;
    }

    &.listen {
      position: absolute;
      left: 1rem;
      transform: rotate(-2deg);
      background: ${(props) => props.theme.colors.colorTheme2};
      box-shadow: ${(props) => props.theme.colors.colorTheme3} 5px 5px 0px 0px;
      transition: 100ms ease-in;

      &:active {
        box-shadow: ${(props) => props.theme.colors.colorTheme4} 0px 0px 0px 0px;
        transform: translate(5px, 5px) rotate(-2deg);
        transition: 100ms ease-in-out;
      }

      svg {
        transform: rotate(180deg);
      }
    }

    &.watch {
      position: absolute;
      right: 1rem;
      top: 8rem;
      transform: rotate(3deg);
      background: ${(props) => props.theme.colors.colorTheme1};
      box-shadow: ${(props) => props.theme.colors.colorTheme4} 5px 5px 0px 0px;
      transition: 100ms ease-out;

      &:active {
        box-shadow: ${(props) => props.theme.colors.colorTheme4} 0px 0px 0px 0px;
        transform: translate(5px, 5px) rotate(3deg);
        transition: 100ms ease-out;
      }
    }
  }
`;

export default App;
