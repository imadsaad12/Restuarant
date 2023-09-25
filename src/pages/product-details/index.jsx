import React, { useState } from "react";
import {
  Wrapper,
  Image,
  Title,
  Container,
  ContentContainer,
  Price,
  Divider,
  CategoryText,
  ListContainer,
  ListItem,
  categoryStyle,
  iconsStyle,
  SelectContainer,
  Select,
  Text,
  Option,
} from "./styles";
import CheckIcon from "@mui/icons-material/Check";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const {
    state: { url, sizes, title, category },
  } = useLocation();
  const { REACT_APP_BASE_URL } = process.env;
  const [size, setSize] = useState("small");

  const { price } = sizes?.find((elm) => elm.size === size);

  return (
    <Wrapper>
      <Container>
        {/* <Image src={`${REACT_APP_BASE_URL}${url}`} /> */}
        <Image src={url} />
        <ContentContainer>
          <Title>{title}</Title>
          <Price>${price}</Price>
          <Divider />
          <CategoryText>
            Category: <span style={categoryStyle}>{category}</span>
          </CategoryText>
          <ListContainer>
            <ListItem>
              <CheckIcon style={iconsStyle} />
              <p>100% Fresh Ingredients</p>
            </ListItem>
            <ListItem>
              <CheckIcon style={iconsStyle} />
              <p>Good texture</p>
            </ListItem>
            <ListItem>
              <CheckIcon style={iconsStyle} />
              <p>Original Flavor</p>
            </ListItem>
            <ListItem>
              <CheckIcon style={iconsStyle} />
              <p>Special packaging</p>
            </ListItem>
          </ListContainer>
          <SelectContainer>
            <Text>Sizes</Text>
            <Select onChange={({ target: { value } }) => setSize(value)}>
              <Option value="small" selected>
                Small
              </Option>
              <Option value="medium">Medium</Option>
              <Option value="large">Large</Option>
            </Select>
          </SelectContainer>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
}
