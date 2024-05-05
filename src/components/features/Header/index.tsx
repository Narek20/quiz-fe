import { Box } from '@mui/material'
import ysuLogo from '@assets/YSU_gerb.png'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <Box className={styles.header}>
    <img className={styles.logo} src={ysuLogo}/>
    </Box>
  )
}

export default Header