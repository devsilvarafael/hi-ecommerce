import { extendTheme } from "@chakra-ui/react";
import components from "./components";
import globalStyles from "./globalStyles";
import palette from "./palette";
import typography from "./typography";

const theme = extendTheme(palette, typography, components, globalStyles);

export default theme;
