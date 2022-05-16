import { Grid, Alert } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'
import NavBar from '../components/NavBar';
import Container from '@mui/material/Container';
import PreviewBlog from '../components/PreviewBlog';
import BrandingProvider from './BrandingProvider';
import Head from '../components/Head';

export default function HomePage({ blogs }) {

  const theme = useTheme();

  return (
    <BrandingProvider>
      <Head
        title="Raspbaby"
        description="@hoangndst's tiny server"
        disableAlternateLocale
      />
      <main sx={{ width: '100%', minHeight: '100vh', margin: '0 auto' }}>
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
            <Grid container spacing={2}>
              {blogs?.map((blog, index) => (
                <PreviewBlog key={index} blog={blog} />
              ))}
            </Grid>
          </Box>
        </Container>
      </main>
    </BrandingProvider>
  )
}
