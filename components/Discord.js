import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';
import MuiPaper from '@mui/material/Paper';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import MuiList from '@mui/material/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from '@mui/material/styles';

const Paper = styled(MuiPaper)({
  transformOrigin: 'top right',
  backgroundImage: 'none',
});
const List = styled(MuiList)(({ theme }) => ({
  maxWidth: theme.spacing(40),
  maxHeight: theme.spacing(60),
  overflow: 'auto',
}));
const Loading = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(1, 0),
}));

export default function Discord() {
  const [open, setOpen] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    setTooltipOpen(false);
  };

  const theme = useTheme();

  return (
    <React.Fragment>
      <Tooltip
        open={tooltipOpen}
        onOpen={() => {
          setTooltipOpen(!open);
        }}
        onClose={() => {
          setTooltipOpen(false);
        }}
        enterDelay={300}
        sx={{
          marginRight: theme.spacing(1),
        }}
        title="Discord"
      >
        <IconButton
          color="primary"
          ref={anchorRef}
          aria-controls={open ? 'discord-popup' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          data-ga-event-category="AppBar"
          data-ga-event-action="toggleNotifications"
        >
          <Badge
            color="error"
            badgeContent={
              0
            }
          >
            {/* <NotificationsNoneRoundedIcon fontSize="small" />
             */}
            <FontAwesomeIcon icon={["fab", "discord"]} size='sm' />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popper
        id="notifications-popup"
        anchorEl={anchorRef.current}
        open={open}
        placement="bottom-end"
        transition
        disablePortal
        role={undefined}

      >
        {({ TransitionProps }) => (
          <ClickAwayListener
            onClickAway={() => {
              setOpen(false);
            }}
          >
            <Grow in={open} {...TransitionProps}
            >
              <Paper
                sx={{
                  mt: 0.5,
                  border: '-px solid',
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.200',
                  boxShadow: (theme) =>
                    `0px 4px 20px ${theme.palette.mode === 'dark'
                      ? 'rgba(0, 0, 0, 0.5)'
                      : 'rgba(170, 180, 190, 0.3)'
                    }`,

                }}

              >
                <List
                  style={{
                    border: '1',
                  }}
                >
                  {<iframe src="https://discord.com/widget?id=755811210913513952&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" /> ? (
                    <iframe src="https://discord.com/widget?id=755811210913513952&theme=dark"
                      style={{
                        width: "350px",
                        height: "500px",
                      }}
                      allowtransparency="true"
                      frameBorder="0"
                      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"

                    />
                  ) : (
                    <Loading>
                      <CircularProgress size={32} />
                    </Loading>
                  )}

                </List>
              </Paper>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </React.Fragment>
  );
}
