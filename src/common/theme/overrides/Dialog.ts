import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function MyDialog(theme: Theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.dialog,
          borderRadius: '16px',

          [theme.breakpoints.down('sm')]: {
            borderRadius: '16px 16px 0 0',
            margin: '0',
            marginTop: 'auto',
            width: '100%',
          },

          '&.MuiPaper-rounded': {},
          '&.MuiDialog-paperFullScreen': {
            borderRadius: 0,
          },
          '&.MuiDialog-paper .MuiDialogActions-root': {
            padding: theme.spacing(3),
          },
          '@media (max-width: 663.95px)': {
            '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
              maxWidth: '100%',
            },
          },
        },
        paperFullWidth: {
          width: '100%',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 3),
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          borderTop: 0,
          borderBottom: 0,
          padding: theme.spacing(3),
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '& > :not(:first-of-type)': {
            marginLeft: theme.spacing(1.5),
          },
        },
      },
    },
  };
}
