import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import profileImage from 'assets/DSC_4309.JPG';
import FlexBetween from './FlexBetween';
import {
  ArrowDropDownOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined
} from '@mui/icons-material';
import { setMode } from 'state';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransform: 'none',
                gap: '1rem',
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100] }}>
                  {user.name}
                </Typography>
                <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[200] }}>
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: '25px',
                }}
              />
            </Button>
            <Menu
              open={isOpen}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
