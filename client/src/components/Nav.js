import { Link } from "react-router-dom";
import { Menu } from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";

// antd inline style overwrite
const centerStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

function Nav() {
  return (
    <div className="Nav">
      <Menu
        style={centerStyle}
        mode="horizontal"
        defaultSelectedKeys={["mail"]}
      >
        <Menu.Item key="search" icon={<SearchOutlined />}>
          <Link to="/search">Search</Link>
        </Menu.Item>
        <Menu.Item key="favourites" icon={<HeartOutlined />}>
          <Link to="/favourites">Favourites</Link>
        </Menu.Item>
      </Menu>
      <br />
    </div>
  );
}

export default Nav;
