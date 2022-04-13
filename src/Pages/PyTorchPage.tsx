import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { Grid, Box } from '@mui/material'
import { pytorchData } from '../MockData/pytorch'
import InputGroups from '../Components/Pytorch/InputGroups'
import { IPyState } from '../MockData/pytorch'
import Output from '../Components/Pytorch/Output'


const PyTorchPage = () => { 
  const [data, setData] = useState<IPyState>({
    packages: pytorchData.packages[0],
    build: pytorchData.build[0],
    os: pytorchData.os[0],
    language: pytorchData.language[0],
    platform: pytorchData.platform[0]
  })

  return (
    <PyTorchPageWrapper className="mt-5">
      <Container>
        <Box className="pytorch-container" sx={{ flexGrow: 1 }}>
            <Grid container spacing={3  }>
              <Grid item xs={12} lg={6}>
                <InputGroups data={data} options={pytorchData.build} setData={setData} value={data.build} choice="build" label="PyTorch Build" />
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputGroups data={data} options={pytorchData.os} setData={setData} value={data.os} choice="os" label="Your Operating System" /> 
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputGroups data={data} options={pytorchData.packages} setData={setData} value={data.packages} choice="packages" label="Package"/>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputGroups data={data} options={pytorchData.language} setData={setData} value={data.language} choice="language" label="Language"/>
              </Grid>
              <Grid item xs={12}>
                <InputGroups data={data} options={pytorchData.platform} setData={setData} value={data.platform} choice="platform" label="Computer Platform" />
              </Grid>
              <Grid item xs={12}>
                  <Output data={data} />
              </Grid>
            </Grid>
        </Box>
      </Container>
    </PyTorchPageWrapper>
  )
}


const PyTorchPageWrapper = styled.div`
  height: calc(100vh - 56px);

  .container {
    display: flex;
    justify-content: center;
  }

  .pytorch-container {
    width: 100%;
    max-width: 800px;
    padding: 40px;
    background: #F1F2F6;
  }

  input {
    width: 100%;
  }

`

export default PyTorchPage