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

const RegisterForm = (onSubmit) => {
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
      <Formik
        initialValues={{ username: "", password: "", confirmPassword: "" }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(4)
            .max(255)
            .required("username is required"),
          password: Yup.string()
            .min(8)
            .max(255)
            .required("password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "passwords must match")
            .required("сonfirm your password"),
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
                  name="username"
                  type="text"
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
                  classes={{ root: classes.TextFieldRoot }}
                  variant="outlined"
                  label="Username"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  name="password"
                  type={"password"}
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
                        Icon={<Visibility />}
                      />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type={"password"}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  classes={{ root: classes.TextFieldRoot }}
                  variant="outlined"
                  label="Confirm Password"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
        )}
      </Formik>
    </Box>
  );
};

export { RegisterForm };
