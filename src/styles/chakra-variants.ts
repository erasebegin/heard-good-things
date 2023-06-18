export const Input = {
    baseStyle: {
      borderColor: 'red',
      _focus: {
        borderColor: 'red',
        bg: 'red',
      },
    },
    variants: {
      main: {
        bg: 'brandGreen.300',
        _focus: {
          bg: 'red',
        },
      },
    },
    defaultProps: {
      bg: 'red.100',
    },
  };
  
  export const Button = {
    baseStyle: {
      bg: 'brand.500',
      _hover: {
        bg: 'brand.500',
      },
    },
    variants: {
      tag: {
        bg: 'gray.500',
        color: 'white',
        fontSize: '14px',
        fontWeight: '400',
        p: '0.625rem',
        _hover: {
          bg: 'gray.400',
        },
      },
      blue: {
        bg: 'brandBlue.400',
        color: 'white',
        _hover: {
          bg: 'brandBlue.400',
          filter: 'brightness(110%)',
        },
      },
      icon: {
        p: 1,
        bg: 'brand.500',
        color: 'white',
      },
      iconOutline: {
        p: 1,
        bg: 'white',
        color: 'brand.500',
        border: '2px solid',
        borderColor: 'brand.500',
        _hover: { color: 'white', bg: 'brand.500' },
      },
      solid: {
        bg: 'brand.500',
        color: 'white',
        border: '1px solid',
        _hover: { bg: 'brand.500', filter: 'brightness(1.05)', transition: '200ms ease-in-out' },
      },
      outline: {
        border: '2px solid',
        borderColor: 'brand.500',
        color: 'brand.500',
        bg: 'white',
      },
      link: {
        bg: 'transparent',
        color: 'brand.300',
        textDecoration: 'underline',
      },
      outlineGray: {
        bg: 'transparent',
        border: '1px',
        borderColor: 'gray.500',
        height: 'auto',
        py: '7px',
        fontWeight: '400',
        fontSize: '14px',
        color: 'gray.500',
        _hover: { bg: 'gray.100' },
      },
    },
    // The default size and variant values
    defaultProps: {
      size: 'md',
      variant: 'outline',
    },
  };
  