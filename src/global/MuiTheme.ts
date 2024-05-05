import { createTheme } from '@mui/material/styles'

export const THEME = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#5B3AA4',
          borderColor: '#5B3AA4',
          '& .MuiInput-underline': {
            borderBottomColor: '#5B3AA4',
          },
          '& .MuiOutlinedInput-root': {
            borderColor: '#5B3AA4',

            '&.Mui-focused fieldset': {
              borderColor: '#5B3AA4',
            },
          },
          '& fieldset': {
            borderColor: '#5B3AA4',
          },
          '& label.Mui-focused': {
            color: '#5B3AA4',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#5B3AA4',
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#5B3AA4',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#5B3AA4',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#5B3AA4',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline': {
            borderBottomColor: '#5B3AA4',
          },
          '& .MuiOutlinedInput-root': {
            borderColor: '#5B3AA4',

            '&.Mui-focused fieldset': {
              borderColor: '#5B3AA4',
            },
          },
          '& input': {
            color: '#5B3AA4',
          },
          '& div': {
            color: '#5B3AA4',
          },
          '& fieldset': {
            borderColor: '#5B3AA4',
          },
          '& label.Mui-focused': {
            color: '#5B3AA4',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#5B3AA4',
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#5B3AA4',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#5B3AA4',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '& fieldset': {
            borderColor: '#5B3AA4',
            backgroundColor: 'transparent',
          },
        },
        iconOutlined: {
          // Change the color of the arrow icon for outlined variant
          color: '#5B3AA4',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#5B3AA4',
        },
      },
    },
  },
  palette: {
    background: {
      default: 'white',
      paper: 'white',
    },
  },
})
