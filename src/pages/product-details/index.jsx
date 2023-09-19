import React from "react";
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

export default function ProductDetails() {
  return (
    <Wrapper>
      <Container>
        <Image src="https://onlinemenudt.amaleenrestaurant.com/wp-content/uploads/2023/07/batatam.jpg" />
        <ContentContainer>
          <Title> Batata Zehlawiye</Title>
          <Price>$6.00</Price>
          <Divider />
          <CategoryText>
            Category: <span style={categoryStyle}>Cold Mezza</span>
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
            <Select>
              <Option>Small</Option>
              <Option>Medium</Option>
              <Option>Large</Option>
            </Select>
          </SelectContainer>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
}
