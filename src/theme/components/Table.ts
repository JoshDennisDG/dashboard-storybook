import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'table',
  'thead',
  'tbody',
])

const Table = defineMultiStyleConfig({
  baseStyle: {
    table: {
      bg: 'white',
      borderCollapse: 'separate',
    },
    thead: {
      bg: 'white',
      borderBottom: '1px',
      borderColor: 'gray.200',
      position: 'sticky',
      top: 0,
    },
    tbody: {
      zIndex: 0,
    },
  },
})

export default Table
