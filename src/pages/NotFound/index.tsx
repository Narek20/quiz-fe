import { Box, Typography } from '@mui/material'
import Loading from '@shared/Loading'

import styles from './styles.module.scss'

const NotFound = () => {
  return (
    <Box className={styles.notFoundPage}>
      <Typography className={styles.notFound}>404 Անհայտ էջ</Typography>
      <Typography className={styles.text}>Հարցաշարերի էջ անցնելու համար սկանավորեք դասախոսի կողմից տրամադրված QR կոդը</Typography>
    </Box>
  )
}

export default NotFound
