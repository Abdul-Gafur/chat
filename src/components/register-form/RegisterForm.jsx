import PropTypes from "prop-types";
import {
  Typography,
  TextField,
  Box,
  makeStyles,
  Grid,
  Avatar,
  Button,
} from "@material-ui/core";
import {
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { ActionButton } from "../";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
  },
  titleContainer: {
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
  },
  avatarRoot: {
    backgroundColor: theme.palette.primary.main,
  },
  TextFieldRoot: {
    width: "100%",
  },
  buttonRoot: {
    width: "100%",
  },
  register: {
    display: "flex",
    justifyContent: "center",
    "& .MuiTypography-root": {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  actionButton: {
    padding: 0,
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.titleContainer}>
        <Box className={classes.avatarContainer}>
          <Avatar classes={{ root: classes.avatarRoot }}>
            <LockIcon />
          </Avatar>
        </Box>
        <Typography
          variant="h5"
          component="h1"
          classes={{ root: classes.title }}
        >
          Register
        </Typography>
      </Box>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="username"
              type="text"
              classes={{ root: classes.TextFieldRoot }}
              variant="outlined"
              label="Login"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              type={"password"}
              classes={{ root: classes.TextFieldRoot }}
              variant="outlined"
              label="Password"
              InputProps={{
                endAdornment: (
                  <ActionButton
                    classes={{ root: classes.actionButton }}
                    Icon={<Visibility />}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmPassword"
              type={"password"}
              classes={{ root: classes.TextFieldRoot }}
              variant="outlined"
              label="Confirm Password"
              InputProps={{
                endAdornment: (
                  <ActionButton
                    classes={{ root: classes.actionButton }}
                    Icon={<Visibility />}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              classes={{ root: classes.buttonRoot }}
              color="primary"
              variant="contained"
              type="submit"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export { RegisterForm };
