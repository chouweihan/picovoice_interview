import React from 'react'
import { IGoogleContent } from '../../MockData/google'
import styled from 'styled-components'
import Parser from "html-react-parser";

const HTMLComponent = ({ data } : { data: IGoogleContent }) => {

  return (
    <HTMLComponentWrapper>
        {Parser(data.body)}
    </HTMLComponentWrapper>
  )
}

const HTMLComponentWrapper = styled.div`
    width: 100%;
    padding: 0 15px;
    font-size: 14px;
    font-family: "Roboto";
    padding-top: 12px;

    p {
      margin: 0;
      padding-bottom: 12px;
    }
`

export default HTMLComponent