import { Item, List, BookmarkIcon } from 'pages/Home/Home.styled';

export const MyLibrary = () => {
  return (
    <>
      <h2> Favorite movies</h2>
      <List>
        <Item>
          <BookmarkIcon />
        </Item>
      </List>
    </>
  );
};
