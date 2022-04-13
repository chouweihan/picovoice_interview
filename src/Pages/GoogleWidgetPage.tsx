import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container} from 'react-bootstrap'
import { IGoogle, mockGoogleData } from '../MockData/google'
import SelectBar from '../Components/GoogleWidget/SelectBar'
import HTMLComponent from '../Components/GoogleWidget/HTMLComponent'
import CodeComponent from '../Components/GoogleWidget/CodeComponent'
import { Paper, Typography } from '@mui/material'

const GoogleWidgetPage = () => {
  const mockData: Array<IGoogle> = mockGoogleData.sort((a, b) => a.label > b.label ? 1 : -1);
  const [selectedLanguage, setSelectedLanguage] = useState<IGoogle>(mockData[0]);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  

  return (
    <GoogleWidgetPageWrapper className="pt-5">
      <Container>
        <div className="google-container mt-4">
            <SelectBar setSelectedLanguage={setSelectedLanguage}  data={mockData}></SelectBar>
            {
              selectedLanguage.content.map((body, index) => {
                return body.type === "HTML" ? <HTMLComponent data={body} key={index} /> : <CodeComponent darkMode={darkMode} setDarkMode={setDarkMode} data={body} key={index}/>
              })
            }
        </div>
      </Container>
    </GoogleWidgetPageWrapper>
  )
}

const GoogleWidgetPageWrapper = styled.div`
  height: calc(100vh - 56px);
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .google-container {
    max-width: 800px;
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid #dadce0;
    border-radius: 8px;
  }

  .code-component:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .MuiTypography-root {
    font-size: 15px;
  }



`

export default GoogleWidgetPage