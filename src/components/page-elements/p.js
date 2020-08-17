import styled from 'styled-components'

export const P = styled.p`
  margin-top: ${({ theme }) => theme.spacing[3]};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`
