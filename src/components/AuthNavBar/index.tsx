import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import TuneIcon from "@mui/icons-material/Tune";
import NavSearchBar from "../NavSearchBar";
import { useRouter } from "next/navigation";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function AuthNavBar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openLanguageMenu, setOpenLanguageMenu] = React.useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNavigateProfile = () => {
    router.push("/student-profile");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSendMessage = () => {
    router.push("/chat-with-educator");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNavigateMyLearnings = () => {
    router.push("/my-learning");
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleOpenLanguage = (event: React.MouseEvent<HTMLElement>) => {
    setOpenLanguageMenu(true);
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCloseLanguage = () => {
    setOpenLanguageMenu(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: 7 }}
    >
      <Box
        sx={{
          width: 250,
          px: 1,
        }}
      >
        <MenuItem onClick={handleNavigateProfile}>My Profile</MenuItem>
        <MenuItem onClick={handleSendMessage}>Send Message</MenuItem>
        <Divider sx={{ backgroundColor: "#2E72B34D" }} />
        <MenuItem onClick={handleMenuClose}>Become a Educator</MenuItem>
        <MenuItem onClick={handleMenuClose}>Billing and Payment</MenuItem>
        <Divider sx={{ backgroundColor: "#2E72B34D" }} />
        <MenuItem onClick={handleOpenLanguage} aria-controls={menuId}>
          English &nbsp; <LanguageIcon sx={{ mb: 0.5, color: "#00000099" }} />
        </MenuItem>
        <Divider sx={{ backgroundColor: "#2E72B34D" }} />
        <MenuItem onClick={handleMenuClose}>
          {" "}
          <LogoutRoundedIcon sx={{ mb: 0.5, color: "primary.main" }} /> &nbsp;
          <Typography
            variant="body1"
            sx={{ color: "primary.main", fontWeight: 600 }}
          >
            Logout
          </Typography>
        </MenuItem>
      </Box>
    </Menu>
  );

  const renderLanguageMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={openLanguageMenu}
      onClose={handleCloseLanguage}
      sx={{ mt: 7 }}
    >
      <Box
        sx={{
          width: 250,
          px: 1,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" pb={1}>
          <Typography
            variant="body1"
            noWrap
            sx={{ color: "#00000099", fontWeight: 600 }}
          >
            Select your Language
          </Typography>
          <IconButton onClick={handleCloseLanguage}>
            <CloseOutlinedIcon
              sx={{ color: "#00000099", width: 20, height: 20 }}
            />
          </IconButton>
        </Box>
        <Divider sx={{ backgroundColor: "#2E72B34D" }} />
        <MenuItem onClick={handleCloseLanguage}>English</MenuItem>
        <MenuItem onClick={handleCloseLanguage}>සිංහල</MenuItem>
        <MenuItem onClick={handleCloseLanguage}>தமிழ்</MenuItem>
      </Box>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" sx={{ px: 5 }}>
        <Toolbar>
          <img className="w-28" src="/images/logo.png" alt="logo" />

          {openSearch && (
            <Box
              display="flex"
              className="w-1/2"
              ml={5}
              pl={2}
              border={2}
              borderRadius={3}
              color="#2E72B3"
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type Text to Search.."
                inputProps={{ "aria-label": "Type Text to Search" }}
              />
              <Box
                sx={{ backgroundColor: "#2E72B3", borderRadius: 2 }}
                className="w-16"
                textAlign="center"
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon sx={{ color: "#ffffff" }} />
                </IconButton>
              </Box>
            </Box>
          )}

          {/* <NavSearchBar /> */}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {!openSearch && (
              <IconButton
                size="large"
                aria-label="tune"
                color="inherit"
                sx={{ mx: 1 }}
                onClick={handleOpenSearch}
              >
                <Badge color="error">
                  <SearchIcon sx={{ color: "#00000099" }} />
                </Badge>
              </IconButton>
            )}

            <IconButton
              size="large"
              aria-label="tune"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Badge color="error">
                <TuneIcon sx={{ color: "#00000099" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="notification"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Badge color="error">
                <NotificationsNoneIcon sx={{ color: "#00000099" }} />
              </Badge>
            </IconButton>
            <Button
              size="large"
              aria-label="my learnings"
              color="inherit"
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                mx: 1,
              }}
              onClick={handleNavigateMyLearnings}
            >
              <Typography
                variant="body1"
                noWrap
                sx={{ color: "#00000099", fontWeight: 600 }}
              >
                My learnings
              </Typography>
            </Button>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ width: 40, height: 40 }}>H</Avatar>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderLanguageMenu}
    </Box>
  );
}
