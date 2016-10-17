import React from 'react'

import styled from 'styled-components'

const TextCenter = `
  text-align: center;
`
const LineFontSize = `
  font-size: 20px;
`
const Title = styled.h1`
  ${TextCenter}
`
const P = styled.p`
  ${TextCenter}
  ${LineFontSize}
  color: rgba(55, 0, 240, 0.82);
`

const Example = () => (
  <div>
    <Title>STYLE COMPONENT</Title>
    <P>font-size: 20px, color: rgba(55, 0, 240, 0.82)</P>
  </div>
)

export default Example
