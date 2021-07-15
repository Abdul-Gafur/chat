import PropTypes from "prop-types";
import {
  Typography,
  TextField,
  Box,
  makeStyles,
  Grid,
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import {
  Lock as LockIcon,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
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
  TextFieldRoot: {
    width: "100%",
  },
  avatarRoot: {
    backgroundColor: theme.palette.primary.main,
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

const LoginForm = ({
  formData,
  onChange,
  showPassword,
  onShowPasswordClick,
}) => {
  const classes = useStyles();

  const { username, password } = formData;

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
          Login
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
              value={username}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              type={showPassword ? "text" : "password"}
              classes={{ root: classes.TextFieldRoot }}
              variant="outlined"
              label="Password"
              value={password}
              onChange={onChange}
              InputProps={{
                endAdornment: (
                  <ActionButton
                    classes={{ root: classes.actionButton }}
                    Icon={showPassword ? <Visibility /> : <VisibilityOff />}
                    onClick={onShowPasswordClick}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormControlLabel
                control={<Checkbox id="rememberMe" color="primary" />}
                label="Remeber me"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              classes={{ root: classes.buttonRoot }}
              color="primary"
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} classes={{ root: classes.register }}>
            <Typography variant="subtitle1" component={Link} to="#">
              Register
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

LoginForm.defaultProps = {
  showPassword: false,
};

LoginForm.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func,
  showPassword: PropTypes.bool,
  onShowPasswordClick: PropTypes.func,
};

export { LoginForm };
