import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import { SearchResultItem } from "./SearchResultItem";

const results = [
  {
    id: 1,
    username: "Sovarim",
    avatarURL:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8b73qPicR8REHeclBVgGoQHaHa%26pid%3DApi&f=1",
  },
  {
    id: 2,
    username: "Ivarim",
    avatarURL:
      "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
  },
];

const SearchResult = () => {
  const searchResultItems = results.map((item) => (
    <SearchResultItem key={item.id} data={item} />
  ));

  return <List>{searchResultItems}</List>;
};

export { SearchResult };
