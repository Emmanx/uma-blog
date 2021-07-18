export const Button = {
  baseStyle: {
    _focus: {
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    }
  },
  sizes: {
    md: {
      fontSize: { base: '1.4rem', lg: '1.4rem' },
      w: { base: '16.5rem' },
      h: { base: '5rem' }
    },
    sm: {
      fontSize: { base: '1.2rem', lg: '1.2rem' },
      fontWeight: '600',
      px: '2rem',
      py: '0.8rem',
      h: { base: '3.2rem' }
    }
  },
  variants: {
    transparent: {
      bg: 'transparent'
    },
    dark: {
      bg: 'transparent'
    },
    outline: {
      bg: '#fff',
      color: 'brand.red',
      borderWidth: '1px',
      borderColor: 'brand.red',
      _hover: {
        bg: 'brand.red',
        color: '#fff',

        _disabled: {
          bg: 'brand.red',
          color: '#fff'
        }
      }
    },
    outlineBlack: {
      bg: '#fff',
      color: '#000',
      borderWidth: '1px',
      borderColor: '#000',
      _hover: {
        bg: '#000',
        color: '#fff',

        _disabled: {
          bg: '#000',
          color: '#fff',

          _active: {
            bg: '#fff',
            color: '#000'
          }
        }
      },
      _active: {
        bg: '#fff',
        color: '#000'
      }
    }
  }
}
