import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Link from 'next/link';


const PaperComponent = styled(Paper)(({ theme }) => ({
  p: 2,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  transition: 'all ease 120ms',
  '&:hover, &:focus-within': {
    borderColor: theme.palette.mode === 'dark' ? 'primary.600' : 'grey.300',
    boxShadow: `0px 4px 20px ${theme.palette.mode === 'dark'
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(170, 180, 190, 0.3)'
      }`,
    
  },
  '&:focus-within': {
    '& a': {
      outline: 'none',
    },
  },

}));

export default function PreviewBlog({ blog }) {
  return (
    <Grid item xs={12} md={6}>


      <PaperComponent elevation={1} >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '15px'
          }}
        >
          <Chip
            label={blog.frontmatter.tags[0]}
            size="small"
            sx={{ fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center' }}
          />
          <Chip
            label={blog.frontmatter.tags[1]}
            size="small"
            sx={{ fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center' }}
          />
        </Box>
        <CardMedia
          component="img"
          height="160"
          width="140"
          sx={{
            borderRadius: '10px',
          }}
          image={blog.frontmatter.cover_image}
          alt={`cover image ${blog.slug}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.frontmatter.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.frontmatter.excerpt}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: 'auto', bottom: '0' }}>
          {/* <Tooltip
                  title="GitHub"
                >
                  <IconButton size='small' aria-label="github" color="primary"
                    onClick={() => {
                      window.open('https://github.com/hoangndst');
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip> */}
          <Button
            size="small"
          >
            Share
          </Button>
          <Link href={`/blog/${blog.slug}`}>
            <Button
              size="small"
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </PaperComponent>
    </Grid>
  );
}