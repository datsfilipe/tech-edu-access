import styled from 'styled-components'

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 2rem;

  a {
    text-decoration: none;
    color: var(--line);

    transition: color 0.2s;
  }

  a:hover {
    color: var(--fg);
    .username {
      display: block;
    }
  }
`