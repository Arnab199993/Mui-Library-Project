import { useState } from 'react'

import './App.css'
import { Box, Stack } from '@mui/material'

import Main from './Components/Main'
import TransitionHover from './Components/Logo'
import GlobalCssOverride from './Components/GlobalTheme'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Box>
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Main />
        </Stack>
      </Box>

    </>
  )
}

export default App
