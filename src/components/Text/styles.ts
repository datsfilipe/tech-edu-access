import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 2rem 1fr;
  width: 55rem;
  padding: 0 2rem;
  margin: 6rem auto 0 auto;
`

export const DottedLine = styled.div`
  &.horizontallyLine {
    border-top: 2px dotted var(--line);
  }
  &.verticallyLine {
    height: 100%;
    border-right: 2px dotted var(--line);
    position: absolute;
    right: 0;
  }
`

export const SideDivider = styled.aside`
  grid-column: 1;

  position: fixed;
  height: 100%;
  width: 2.2rem;

  display: flex;
  flex-direction: row;

  .date {
    writing-mode: vertical-lr;
    font-size: 1rem;
    font-family: 'David Libre';
    color: var(--background);
    background: linear-gradient(90deg, var(--red-light), 3%, var(--red));
    height: 7.3rem;
    text-align: center;
  }
`

export const Content = styled.div`
  grid-column: 2;
  padding: 0 4rem 0 2rem;
  margin-bottom: 5rem;

  cursor: default;

  &:active {
    cursor: text;
  }

  .title {
    font-weight: 700;
    font-family: 'David Libre', sans-serif;
    font-size: 2.5rem;
    line-height: 2.5rem;
    background: linear-gradient(90deg, var(--red-light), 3%, var(--red));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::selection {
      background: unset;
      background-clip: unset;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: var(--background);
      background-color: var(--red-light);
      color: var(--background);
    }
  }

  .subtitle {
    font-size: 0.8rem;
    color: var(--text);
    margin: 1.2rem 0;
  }

  .content-body {
    text-align: justify;

    .paragraph {
      margin-bottom: 1.5rem;

      .quot {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: italic;
      }
    }
  }
`