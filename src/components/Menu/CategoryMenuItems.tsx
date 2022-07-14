import { Menu, MenuButton, Text } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch";

const CategoryMenuItems = () => {
  const categories = useFetch("/products/categories");

  return (
    <Menu>
      {categories &&
        categories.map((category: string) => (
          <MenuButton
            key={category}
            as={Text}
            variant="subtitle1"
            onClick={() => console.log(category)}
          >
            {category[0].toUpperCase() + category.substring(1)}
          </MenuButton>
        ))}
    </Menu>
  );
};

export default CategoryMenuItems;
