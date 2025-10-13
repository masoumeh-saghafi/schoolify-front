// MUI Components

import MuiAppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'

// Custom Styled AppBar
const CustomAppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.paper
}))

export default CustomAppBar
