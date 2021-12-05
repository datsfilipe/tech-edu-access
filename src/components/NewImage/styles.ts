import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  span {    
    img {
      border-radius: 0.25rem;
      max-height: 16rem!important;
      border: 1px solid #333!important;
      transition: border-color 0.4s;
    }
  }
`