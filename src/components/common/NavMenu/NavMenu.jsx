import { TabMenu } from "primereact/tabmenu";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname;
    if (url === "/ciudadanos") return setActiveIndex(0);
    if (url === "/ciudadano/crear") return setActiveIndex(1);
    if (url === "/vacantes") return setActiveIndex(2);
  }, []);

  const items = [
    { label: "Lista de Ciudadanos", url: "/ciudadanos" },
    { label: "Agregar Ciudadano", url: "/ciudadano/crear" },
    { label: "Vacantes", url: "/vacantes" },
  ];

  return (
    <TabMenu
      model={items}
      render={(item) => <Link to={item.url}>{item.label}</Link>}
      onTabChange={(e) => setActiveIndex(e.index)}
      activeIndex={activeIndex}
    />
  );
};

export default NavMenu;
