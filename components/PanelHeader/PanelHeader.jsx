import styles from "./panelHeader.module.css";
import {
  AppBar,
  Container,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { HiMenu } from "react-icons/hi";
import user from "../../public/user.jpg";
import { MdWidgets } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  handleLoggedOut,
  handleToggleProfile,
  handleToggleWallet,
} from "../../features/userSlice/userSlice";
import Image from "next/image";

const PanelHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    if (anchorElUser) {
      dispatch(handleLoggedOut());
      router.push("/");
    }
  };
  const handleWalletClick = () => {
    dispatch(handleToggleWallet());
  };
  const handleProfileClick = () => {
    dispatch(handleToggleProfile());
  };
  const pages = [
    {
      text: "Products",
      to: "/dashboard/products",
      icon: <MdWidgets className="text-muted me-2" />,
    },
    {
      text: "History",
      to: "/dashboard/history",
      icon: <FaUserClock className="text-muted me-2" />,
    },
  ];
  const settings = [
    {
      text: "Profile",
      icon: <BsPersonCircle className="text-muted me-3" />,
      onClick: handleProfileClick,
    },
    {
      text: "Wallet",
      icon: <IoIosWallet className="text-muted me-3" />,
      onClick: handleWalletClick,
    },
    {
      text: "Logout",
      icon: <IoLogOut size={17} className="text-muted me-2" />,
      onClick: handleLogout,
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{ top: 15, left: 0, width: "90%", mx: "auto", zIndex: 10 }}
      className={`${styles.container} `}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <HiMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: "block",
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  sx={{ p: 0 }}
                  onClick={handleCloseNavMenu}
                >
                  <Link className="text-black w-100 px-3 py-2" href={page.to}>
                    {page.icon}
                    {page.text}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ width: 40, height: 40 }}>
                  <Image
                    quality={100}
                    width={60}
                    height={40}
                    alt="user"
                    src={user}
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  sx={{ p: 0 }}
                  onClick={handleCloseUserMenu}
                >
                  <Typography
                    onClick={setting.onClick}
                    textAlign="center"
                    className="px-3 py-2 w-100 text-center"
                  >
                    {setting.icon}
                    {setting.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PanelHeader;
