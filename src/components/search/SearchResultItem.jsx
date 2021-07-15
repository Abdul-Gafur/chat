import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { Chat as ChatIcon } from "@material-ui/icons";
import { ActionButton } from "../";

const SearchResultItem = ({ data, onClick }) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={data.avatarURL} />
      </ListItemAvatar>
      <ListItemText primary={data.username} />
      <ListItemSecondaryAction>
        <ActionButton Icon={<ChatIcon />} color="primary" onClick={onClick} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

SearchResultItem.defaultProps = {
  data: {
    username: "Anonymous",
    avatarURL: "",
  },
};

SearchResultItem.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
  }),
};

export { SearchResultItem };
