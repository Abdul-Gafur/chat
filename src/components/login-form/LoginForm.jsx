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
import { Formik } from "formik";
import * as Yup from "yup";
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

const LoginForm = ({
  formData,
  onChange,
  showPassword,
  onShowPasswordClick,
  onSubmit,
}) => {
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
          Log in
        </Typography>
      </Box>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required("Login is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="username"
                  type="text"
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
                  classes={{ root: classes.TextFieldRoot }}
                  variant="outlined"
                  label="Login"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  type={showPassword ? "text" : "password"}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  classes={{ root: classes.TextFieldRoot }}
                  variant="outlined"
                  label="Password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
                  Log in
                </Button>
              </Grid>
              <Grid item xs={12} classes={{ root: classes.register }}>
                <Typography variant="subtitle1" component={Link} to="/register">
                  Register
                </Typography>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
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
