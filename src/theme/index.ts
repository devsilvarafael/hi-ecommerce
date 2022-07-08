import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import palette from "./palette";
import typography from "./typography";

const theme = extendTheme(palette, typography, components);

export default theme;
