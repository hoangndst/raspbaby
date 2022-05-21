import { Grid, Alert } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'
import NavBar from '../components/NavBar';
import Container from '@mui/material/Container';
import PreviewBlog from '../components/PreviewBlog';
import { PaperComponent } from '../components/PreviewBlog';
import BrandingProvider from './BrandingProvider';
import Head from '../components/Head';
import Typography from '@mui/material/Typography';
import { Pagination } from '@mui/material';

const PAGE_SIZE = 2;

export default function HomePage({ blogs }) {
  
  const theme = useTheme();
  console.log(blogs);
  
  const [firstPost, secondPost, ...otherPosts] = blogs ? blogs : 
  [
    {
      frontmatter: {
        title: '510Pay',
        date: '2022-04-06T00:00:00.000Z',
        excerpt: 'A funny online web app I made for my homies at My Dinh dormitory to manage our money',
        tags: [Array],
        cover_image: '/static/images/510pay.png'
      },
      slug: '510pay'
    },
    {
      frontmatter: {
        title: 'Bomb',
        date: '2022-04-06T00:00:00.000Z',
        excerpt: 'Game Project. OOP Project.',
        tags: [Array],
        cover_image: '/static/images/bomb/logo.gif'
      },
      slug: 'bomb'
    },
    {
      frontmatter: {
        title: 'Buddy',
        date: '2022-04-06T00:00:00.000Z',
        excerpt: 'A funny bot provides information, weather, football, movies, reminders, chat, ...',
        tags: [Array],
        cover_image: '/static/images/buddy.png'
      },
      slug: 'buddy'
    }
  ];

  const [page, setPage] = React.useState(0);
  const pageStart = page * PAGE_SIZE;
  const totalPage = Math.ceil(otherPosts.length / PAGE_SIZE);
  const displayedPosts = otherPosts.slice(pageStart, pageStart + PAGE_SIZE);

  return (
    <BrandingProvider>
      <Head
        title="Raspbaby"
        description="@hoangndst's tiny server"
        disableAlternateLocale
      />
      <main sx={{ width: '100%', minHeight: '100vh', margin: '0 auto', bg: 'gradient' }}>
        <NavBar />
        <Container
          sx={{
            padding: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              maxWidth: '1000px',
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
          <Box sx={{ margin: '0 auto', maxWidth: '1000px' }} container spacing={2} >
            <Grid container spacing={2}>
              {[firstPost, secondPost]?.map((blog, index) => (
                <Grid key={index} item xs={12} md={6}>
                  <PaperComponent elevation={1}>
                    <PreviewBlog blog={blog} hasImage={true} />
                  </PaperComponent>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            <Box component="ul"
              sx={{
                p: 0, m: 0,
                maxWidth: '1000px',

                margin: '0 auto'
              }}
            >
              <Typography
                component="h2"
                color="text.primary"
                variant="h5"
                fontWeight="700"
                sx={{ mt: 8 }}
              >
                Other posts{' '}

              </Typography>

              {displayedPosts?.map((blog, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={() => ({
                    py: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    '&:not(:last-of-type)': {
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    },
                  })}
                >
                  <PreviewBlog blog={blog} hasImage={false} />
                </Box>
              ))}


            </Box>
            <Pagination
              page={page + 1}
              count={totalPage}
              variant="outlined"
              shape="rounded"
              onChange={(_, value) => {
                setPage(value - 1);
              }}
            />
          </Box>

        </Container>
      </main>
    </BrandingProvider>
  )
}
