import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Backdrop,
  Badge,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import ForgetPassword from "../ForgetPassword";
import OTPComponent from "../OTPComponent";
import SetNewPassword from "../SetNewPassword";
import PasswordChangeAlert from "../PasswordChangeAlert";
import RoleSelect from "../RoleSelect";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [openRoleSelect, setOpenRoleSelect] = React.useState(false);
  const [openJoin, setOpenJoin] = React.useState(false);
  const [studentRole, setStudentRole] = React.useState(false);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openForgetPassword, setOpenForgetPassword] = React.useState(false);
  const [openOTPComponent, setOpenOTPComponent] = React.useState(false);
  const [openSetNewpasword, setOpenSetNewpasword] = React.useState(false);
  const [openPasswordChangeAlert, setOpenPasswordChangeAlert] =
    React.useState(false);

  //Functions for Role Select popup
  const handleCloseRoleSelect = () => {
    setOpenRoleSelect(false);
  };

  const handleOpenRoleSelect = () => {
    setOpenRoleSelect(true);
    setOpenJoin(false);
    setOpenSignIn(false);
  };

  //Function for role assing
  const handleStudentRoleSelect = () => {
    setStudentRole(true);
  };

  //functions for Sign Up popup
  const handleCloseJoin = () => {
    setOpenJoin(false);
    setStudentRole(false);
  };
  const handleOpenJoin = () => {
    setOpenSignIn(false);
    setOpenJoin(true);
    setOpenRoleSelect(false);
  };

  //Functions for Sign In popup
  const handleCloseSignIn = () => {
    setOpenSignIn(false);
    setStudentRole(false);
  };
  const handleOpenSignIn = () => {
    setOpenPasswordChangeAlert(false);
    setOpenForgetPassword(false);
    setOpenJoin(false);
    setOpenSignIn(true);
    setOpenRoleSelect(false);
  };

  //Functions for Forget Password popup
  const handleCloseForgetPassword = () => {
    setOpenForgetPassword(false);
  };

  const handleOpenForgetPassword = () => {
    setOpenSignIn(false);
    setOpenOTPComponent(false);
    setOpenForgetPassword(true);
  };

  //Functions for OTP popup
  const handleCloseOTPComponent = () => {
    setOpenOTPComponent(false);
  };

  const handleOTPComponent = () => {
    setOpenSetNewpasword(false);
    setOpenForgetPassword(false);
    setOpenOTPComponent(true);
  };

  //Functions for Set New Password popup
  const handleCloseSetNewPassword = () => {
    setOpenSetNewpasword(false);
  };

  const handleOpenSetNewPassword = () => {
    setOpenOTPComponent(false);
    setOpenSetNewpasword(true);
  };

  //Functions for Password Change Alert popup
  const handleOpenPasswordAlert = () => {
    setOpenSetNewpasword(false);
    setOpenPasswordChangeAlert(true);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setStudentRole(false);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="tune"
              color="inherit"
              sx={{ mx: 1 }}
              // onClick={handleOpenSearch}
            >
              <Badge color="error">
                <SearchIcon sx={{ color: "#00000099" }} />
              </Badge>
            </IconButton>
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
              aria-label="tune"
              color="inherit"
              sx={{ mx: 1 }}
            >
              <Badge color="error">
                <LanguageIcon sx={{ mb: 0.5, color: "#00000099" }} />
              </Badge>
            </IconButton>

            <Button
              size="small"
              aria-label="Join"
              sx={{
                textTransform: "none",
                lineHeight: 1.5,
                borderRadius: 2,
                border: 1,
                px: 3,
                color: "primary.main",
                mt: 1.5,
                mx: 1,

                height: 30,
              }}
              onClick={handleOpenRoleSelect}
            >
              <Typography
                variant="body1"
                noWrap
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                Join
              </Typography>
            </Button>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openRoleSelect}
            >
              <RoleSelect
                handleCloseRoleSelect={handleCloseRoleSelect}
                handleOpenSignIn={handleOpenSignIn}
                handleStudentRole={handleStudentRoleSelect}
                handleOpenSignUp={handleOpenJoin}
              />
            </Backdrop>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openSignIn}
            >
              <SignIn
                handleCloseSignIn={handleCloseSignIn}
                handleOpenSignUp={handleOpenJoin}
                handleForgetPassword={handleOpenForgetPassword}
              />
            </Backdrop>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openJoin}
            >
              <SignUp
                handleCloseJoin={handleCloseJoin}
                handleOpenSignIn={handleOpenSignIn}
                studentRole={studentRole}
              />
            </Backdrop>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openForgetPassword}
            >
              <ForgetPassword
                handleCloseForgetPassword={handleCloseForgetPassword}
                handleOpenOTPComponent={handleOTPComponent}
                handleOpenSignIn={handleOpenSignIn}
              />
            </Backdrop>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openOTPComponent}
            >
              <OTPComponent
                handleOpenForgetPassword={handleOpenForgetPassword}
                handleCloseOTP={handleCloseOTPComponent}
                handleOpenSetNewPassword={handleOpenSetNewPassword}
              />
            </Backdrop>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openSetNewpasword}
            >
              <SetNewPassword
                handleCloseSetNewPassword={handleCloseSetNewPassword}
                handleOpenOTPComponent={handleOTPComponent}
                handlePasswordChangeAlert={handleOpenPasswordAlert}
              />
            </Backdrop>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openPasswordChangeAlert}
            >
              <PasswordChangeAlert
                handleOpenSignIn={handleOpenSignIn}
                loginSuccess
              />
            </Backdrop>
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
    </Box>
  );
}
