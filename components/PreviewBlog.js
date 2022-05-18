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


export const PaperComponent = styled(Paper)(({ theme }) => ({
  p: 2,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.mode === 'dark' ? 'rgb(19, 47, 76)' : theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  border: theme.palette.mode === 'dark' ? '1px solid rgb(30, 73, 118)' : '1px solid #E7EBF0',
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
  height: '400px'

}));

export default function PreviewBlog({ blog, hasImage }) {
  return (
    <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '15px',
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
        {hasImage ?
          (<CardMedia
            component="img"
            height="160"
            width="240"
            sx={{
              borderRadius: '10px',
            }}
            image={blog.frontmatter.cover_image}
            alt={`cover image ${blog.slug}`}
          />) 
          : null
        }
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
    </>
  );
}