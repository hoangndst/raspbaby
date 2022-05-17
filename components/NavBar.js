import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../pages/BrandingProvider';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Discord from './Discord';


const pages = ['Products', 'Buddy', 'Blog'];

const Header = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.appBar,
  backdropFilter: 'blur(20px)',
  boxShadow: `inset 0px -1px 1px ${theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[100]
    }`,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.primaryDark[900], 0.72)
      : 'rgba(255,255,255,0.72)',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const NavBar = () => {

  const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Header>
      <Container width="100%" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 1, display: { xs: 'flex', md: 'flex' }, fontWeight: 'Bold' }}
          >
            <Link href="/">
              <IconButton size='small'
              >
                <Image
                  width={30}
                  height={30}
                  src={`/static/images/rasp-logo.png`}
                  alt="rasp-icon"
                />
              </IconButton>
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 5, display: { xs: 'none', md: 'flex' }, fontWeight: 'Bold' }}
            color={theme.palette.mode === 'dark' ? 'white' : 'black'}
          >
            Raspbaby
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center', marginRight: theme.spacing(1) }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ fontWeight: '700', textTransform: 'none' }}
              >
                {page}
              </Button>
            ))}
            {/* <Search color='primary' >
              <SearchIconWrapper color='primary'>
                <SearchIcon color='primary' />
              </SearchIconWrapper>
              <StyledInputBase
                color='primary'
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
            {/* <IconButton
              color='primary'
              sx={{
                minWidth: '200px',
                display: { xs: 'flex', md: 'flex' },
                alignItems: 'center',
                position: 'relative',
                fontSize: '0.8rem',
              }}
            >
              <SearchIcon 
                sx={{
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <span
            
              >
                Search...
              </span>
            </IconButton> */}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
            <Discord />
            <Tooltip
              sx={{
                marginRight: theme.spacing(1),
              }}
              title="GitHub"
            >
              <IconButton size='small' aria-label="github" color="primary"
                onClick={() => {
                  window.open('https://github.com/hoangndst');
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              sx={{
                marginRight: theme.spacing(1),
              }}
              title={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              <IconButton size='medium' onClick={colorMode.toggleColorMode} color="primary">
                {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon fontSize='1.5rem' /> : <DarkModeOutlinedIcon fontSize='1.5rem' />}
              </IconButton>
            </Tooltip>

          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Header>
  );
};
export default NavBar;
