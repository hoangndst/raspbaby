import * as React from 'react';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'
import NavBar from '../../components/NavBar';
import Container from '@mui/material/Container';
import { Button, Alert } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { styled, alpha } from '@mui/material/styles';
import BrandingProvider from '../BrandingProvider';
import MarkdownElement from '../../components/MarkdownElement';

const classes = {
  back: 'TopLayoutBlog-back',
  time: 'TopLayoutBlog-time',
  container: 'TopLayoutBlog-container',
};

const styles = ({ theme }) => ({
  flexGrow: 1,
  background:
    theme.palette.mode === 'dark'
      ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%, #001E3C 100%)`
      : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
  backgroundSize: 'auto 250px ',
  backgroundRepeat: 'no-repeat',
  [`& .${classes.back}`]: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(-1),
  },
  [`& .${classes.container}`]: {
    paddingTop: 60 + 20,
    marginBottom: theme.spacing(8),
    maxWidth: `calc(740px + ${theme.spacing(12)})`,
    '& h1': {
      marginBottom: theme.spacing(3),
    },
    '& .markdown-body': {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1.7,
    },
    '& img, & video': {
      display: 'block',
      margin: 'auto',
    },
    '& strong': {
      color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
    },
    '& pre': {
      fontSize: theme.typography.pxToRem(16),
    },
    '& summary': {
      padding: 8,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
    },
    '& details': {
      paddingLeft: 16,
      paddingRight: 16,
      background:
        theme.palette.mode === 'dark'
          ? alpha(theme.palette.primary[900], 0.3)
          : alpha(theme.palette.grey[50], 0.5),
      border: '1px solid',
      borderRadius: 10,
      borderColor:
        theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[200],
      transitionProperty: 'all',
      transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '200ms',
      '&:hover, &:focus-visible': {
        background:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary[900], 0.4)
            : theme.palette.grey[50],
        borderColor:
          theme.palette.mode === 'dark' ? theme.palette.primaryDark[500] : theme.palette.grey[300],
      },
    },
    '& th': {
      textAlign: 'left',
      borderBottom: `3px solid rgba(62, 80, 96, 0.2) !important`,
    },
    '& .blog-description': {
      fontSize: theme.typography.pxToRem(13),
      textAlign: 'left',
      color: theme.palette.grey[600],
      '& a': {
        color:
          theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
        textDecoration: 'underline',
      },
    },
  },
  [`& .${classes.time}`]: {
    color: theme.palette.text.secondary,
    ...theme.typography.caption,
    fontWeight: 500,
  },
});

function BlogLayout(props) {

  const { className, docs } = props;
  const { description, rendered, title, headers } = docs.en;
  const finalTitle = title || headers.title;
  const router = useRouter();

  const theme = useTheme();

  return (
    <BrandingProvider>
      <Box sx={{ width: '100%', minHeight: '100vh', margin: '0 auto' }}>
        <NavBar />
        <Container
          sx={{
            padding: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              maxWidth: '800px',
              margin: '0 auto',
              marginBottom: '20px',
            }}
          >
            <Alert
              sx={{
                fontWeight: 'bold'
              }}
              severity="warning"
            >
              Its beta, dont expect too much!
            </Alert>
          </Box>
          <Box sx={{ margin: '0 auto', maxWidth: '800px' }} container spacing={2} >

            <Link
              color="text.secondary"
              variant="body2"
              href="/"
            >
              <Button
                startIcon={<ArrowBackIosNewOutlinedIcon />}
                size="small"
              >
                Back
              </Button>
            </Link>
            {headers.title ? (
            <React.Fragment>
              <time dateTime={headers.date} className={classes.time}>
                {new Intl.DateTimeFormat('en', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }).format(new Date(headers.date))}
              </time>
              <MarkdownElement>
                <h1>{headers.title}</h1>
              </MarkdownElement>
            </React.Fragment>
          ) : null}
          {rendered.map((chunk, index) => {
            return <MarkdownElement key={index} renderedMarkdown={chunk} />;
          })}

          </Box>
        </Container>
      </Box>
    </BrandingProvider>
  )
}

export default styled(BlogLayout)(styles);
