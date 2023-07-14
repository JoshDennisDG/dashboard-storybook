import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'element',
  'field',
])

const Input = defineMultiStyleConfig({
  baseStyle: {
    element: {
      color: 'gray.400',
    },
    field: {
      bg: 'white',
    },
  },
})

export default Input
