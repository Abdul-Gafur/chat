import { AppMenu as BaseAppMenu } from "../components";

const userList = [
  {
    id: 1,
    username: "Sovarim",
  },
  {
    id: 2,
    username: "Persival",
  },
  {
    id: 3,
    username: "King",
  },
];

const AppMenu = ({ open, onMenuClose }) => {
  return <BaseAppMenu open={open} onMenuClose={onMenuClose} list={userList} />;
};

export { AppMenu };
