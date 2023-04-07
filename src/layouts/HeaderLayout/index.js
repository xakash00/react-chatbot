import { useEffect, useState } from "react";
import {
  Header,
  Heading,
  ListItem,
  Margin,
  Sidebar,
  Toggle,
} from "../../styled/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  closeSidebar,
  toggleSidebar,
} from "../../redux/actions/openSidebarAction";

export default function Headerlayout({ children }) {
  const [offset, setOffset] = useState(100);
  const state = useSelector((store) => store.toggleReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      setOffset(scroll);
    });
    return window.removeEventListener("scroll", () => {});
  }, []);
  const Menu = [
    {
      path: "/",
      Label: "Home",
    },
    {
      path: "/gify",
      Label: "Gify",
    },
  ];

  return (
    <div className="lead">
      <Header
        className="navbar navbar-expand-lg"
        height={offset > 100 ? "0.5rem" : "1.2rem"}
        bgColor={offset > 100 ? "#f5f5f5" : "#fff"}
      >
        <Heading
          onClick={() => dispatch(closeSidebar())}
          scale={offset > 100 ? "0.8" : "1.1"}
        >
          <Link to={{ pathname: "/" }}>Aakash</Link>
        </Heading>
        <Toggle
          className="btn"
          size={offset > 100 ? "20" : "25"}
          rounded
          onClick={() => dispatch(toggleSidebar())}
        >
          <GiHamburgerMenu />
        </Toggle>
      </Header>

      <Margin />
      {children}
      <Sidebar
        bgColor={offset > 100 ? "#f5f5f5" : "#fff"}
        sidebar={state.isOpen === true ? "0%" : "-100%"}
      >
        <ul
          onClick={() => dispatch(toggleSidebar())}
          className="list-unstyled text-center"
        >
          {Menu.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link to={item.path}>{item.Label}</Link>
              </ListItem>
            );
          })}
        </ul>
      </Sidebar>
    </div>
  );
}
