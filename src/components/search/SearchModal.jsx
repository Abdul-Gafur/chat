import { Modal, Paper, makeStyles, Container } from "@material-ui/core";
import { SearchInput } from "./SearchInput";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    padding: theme.spacing(2),
  },
}));

const SearchModal = () => {
  const classes = useStyles();
  return (
    <Modal open>
      <Container maxWidth="sm">
        <Paper elevation={2} classes={{ root: classes.paperRoot }}>
          <SearchInput />
        </Paper>
      </Container>
    </Modal>
  );
};

export { SearchModal };
