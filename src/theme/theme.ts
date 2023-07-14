import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import Button from './components/Button'
import Input from './components/Input'
import Table from './components/Table'

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Avenir Heavy', sans-serif`,
    body: `'Avenir Medium', sans-serif`,
  },
  components: {
    Button,
    Input,
    Table,
  },

  styles: {
    global: () => ({
      body: {
        bg: colors.selago,
        color: colors.regalBlue,
      },
    }),
  },
})

export default theme
