import { Box } from '@mui/material'

import styles from './styles.module.scss'
import Header from '@features/Header'


const Dashboard = ({}) => {
  return (
    <Box className={styles.dashboard}>
      <Header />
    </Box>
  )
}

export default Dashboard