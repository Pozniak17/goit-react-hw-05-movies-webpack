import { Item, List, StarIcon } from 'pages/Home/Home.styled';

export const MyLibrary = () => {
  return (
    <>
      <h2> Favorite movies</h2>
      <List>
        <Item>
          <StarIcon />
        </Item>
      </List>
    </>
  );
};
