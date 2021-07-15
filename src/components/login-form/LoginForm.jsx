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
import { Lock as LockIcon } from "@material-ui/icons";

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
}));

const LoginForm = () => {
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
          Login
        </Typography>
      </Box>

      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              classes={{ root: classes.TextFieldRoot }}
              variant="outlined"
              label="Login"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              classes={{ root: classes.TextFieldRoot }}
              variant="outlined"
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormControlLabel
                control={<Checkbox color="primary" />}
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
        </Grid>
      </form>
    </Box>
  );
};

export { LoginForm };
