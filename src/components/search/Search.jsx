import PropTypes from "prop-types";
import { Modal, Paper, makeStyles, Container } from "@material-ui/core";
import { SearchInput } from "./SearchInput";
import { SearchResult } from "./SearchResult";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    padding: theme.spacing(2),
  },
  modal: {
    paddingTop: "5%",
  },
}));

const Search = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Modal open={open} className={classes.modal} onClose={onClose}>
      <Container maxWidth="sm">
        <Paper elevation={2} classes={{ root: classes.paperRoot }}>
          <SearchInput />
          <SearchResult />
        </Paper>
      </Container>
    </Modal>
  );
};

Search.defaultProps = {
  open: false,
};

Search.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export { Search };
