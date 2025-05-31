import { ReactNode } from "react";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

export interface RoutesType {
  /**
   * Path of router
   */
  path: string;
  element: ReactNode;
  navLabel: string;
}

const routes: Array<RoutesType> = [
  {
    path: "/about",
    element: <AboutPage />,
    navLabel: "About",
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
    navLabel: "Portfolio",
  },
  {
    path: "/contact",
    element: <ContactPage />,
    navLabel: "Contact Me",
  },
  {
    path: "/blog",
    element: <ContactPage />,
    navLabel: "Blog",
  },
];

export default routes;
