import React from 'react'
import { IGoogleContent } from '../../MockData/google'
import styled, { css } from "styled-components"
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Tooltip } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import { useSnackbar } from 'notistack';

interface ICodeComponent {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
  darkMode: boolean,
  data: IGoogleContent
}

const CodeComponent = ({ setDarkMode, darkMode, data } : ICodeComponent) => {
  const { enqueueSnackbar } = useSnackbar();

  const copyContent = () => {
    navigator.clipboard.writeText(data.body);
    enqueueSnackbar('Copied to clipboard');
  }

  return (
    <CodeComponentWrapper className="code-component" darkMode={darkMode}>
      <div className="icon-container">
        <Tooltip title={darkMode ? "light theme" : "dark theme"}>
          <IconButton sx={{ ml: 1 }} onClick={() => setDarkMode(prev => !prev)} >
              <BrightnessMediumIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="copy">
          <IconButton onClick={copyContent}>
              <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </div>
      <p>
        { data.body }
      </p>
    </CodeComponentWrapper>
  )
}


const CodeComponentWrapper = styled.div<{darkMode: boolean}>`
    width: 100%;
    padding: 17px 15px;
    font-size: 14px;
    font-family: "Roboto Mono";
    position: relative;


    p {
      padding: 0;
      margin: 0;
      color: rgb(55, 71, 79);
    }

    .icon-container {
      position: absolute;
      display: flex;
      top: 1px;
      right: 4px;
    }

    .MuiSvgIcon-root {
      color: rgb(32, 33, 36);
      width: 17px;
      height: 17px;
    }

    background-color: #f1f3f4;

    ${props => props.darkMode && css`
      .MuiSvgIcon-root {
        color: rgba(255, 255, 255, 0.7);
        :hover {
          color: white;
        }
      }

      background-color: #283142;
      p {
        color: rgb(236, 239, 241);
      }
    `}
`

export default CodeComponent