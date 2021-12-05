import styled from 'styled-components'

export const Container = styled.div`
  .quote {
    position: relative;
    margin: 1.2rem 0;

    .phrase {
      padding-top: 0.3rem;
      margin-left: 1.3rem;
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-style: italic;
    }

    .author {
      margin-top: 1rem;
      margin-left: 1.3rem;
      padding-bottom: 0.3rem;
      font-size: 0.85rem;
    }

    &::before {
      content: '';
      position: absolute;
      width: 0.3rem;
      height: 100%;
      border-radius: 0.5rem;
      background: linear-gradient(var(--red-light), 25%, var(--red));
    }
  }
`