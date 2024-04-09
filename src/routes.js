// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import Author from "pages/LandingPages/Author";
import Oferts from "pages/LandingPages/Oferts";

const routes = [
  {
    name: "Ofertas", /*Pages*/
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Ofertas de prácticas",
        collapse: [
          {
            name: "Ver ofertas",
            route: "/pages/LandingPages/Oferts",
            component: <Oferts />,
          },
        ],
      },
    ],
  },
  {
    name: "Estudiantes", /*Sections*/
    icon: <Icon>view_day</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Perfiles estudiantes",
        collapse: [
          {
            name: "Ver perfiles",
            route: "/pages/LandingPages/Author",
            component: <Author />,
          },
        ],
      },
    ],
  },
];

export default routes;
