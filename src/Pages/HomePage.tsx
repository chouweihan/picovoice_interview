import React from 'react'
import { Container, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Divider, Stack, Typography, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Container className="pt-5">
        <div className="d-flex">
          <Link to="/pytorch" className="me-3">
            <Button variant='outline-primary'>
              Pytorch 
            </Button>
          </Link>
          <Link to="/googleWidget">
            <Button variant='outline-primary'>
              Google Widget
            </Button>
          </Link>
        </div>
        <Divider />
        <Typography mt={4}>
          My info:
        </Typography>
        <Stack spacing={2} mt={1} direction="row">
          <Tooltip title="github">
            <a href="https://www.github.com/chouweihan" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </Tooltip>
          <Tooltip title="website">
            <a href="https://www.chouweihan.com" target="_blank" rel="noreferrer">
              <LanguageIcon />
            </a>
          </Tooltip>
          <Tooltip title="linkedin">
            <a href="https://www.linkedin.com/in/chouweihan" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </Tooltip>
          <Tooltip title="phone">
            <a href="tel:16049927988">
              <LocalPhoneIcon />
            </a>
          </Tooltip>
          <Tooltip title="email">
            <a href="mailto:chouweihan@gmail.com">
              <EmailIcon />
            </a>
          </Tooltip>
        </Stack>
      </Container>
    </HomePageWrapper>
  )
}

const HomePageWrapper = styled.div`
  .container {
    display: grid;
    place-items: center;
  }

  .MuiSvgIcon-root {
    color: black;
    :hover {
      color: #566103;
    }
  }
`

export default HomePage