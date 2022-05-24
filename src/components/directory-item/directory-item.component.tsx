import { FC } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./directory-item.styles";

import { DirectoryCategory } from "../directory/directory.component";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <Styled.DirectoryItemContainer onClick={onNavigateHandler}>
      <Styled.BackgroundImage
        className="background-image"
        imageUrl={imageUrl}
      />
      <Styled.Body>
        <h2> {title}</h2>
        <p>Shop Now</p>
      </Styled.Body>
    </Styled.DirectoryItemContainer>
  );
};

export default DirectoryItem;
