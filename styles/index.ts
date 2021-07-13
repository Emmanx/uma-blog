import { Button, Container } from './components'

import colors from './foundations/colors'
import { extendTheme } from '@chakra-ui/react'
import { fonts } from './foundations/fonts'
import styles from './global'

const theme = extendTheme({ colors, fonts, styles, components: { Button, Container } })

export default theme
