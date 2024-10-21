import { Drawer, Menu } from "antd";
import { FC } from "react";
import UserDropdownMenu from "./user-dropdown-menu";
import type {
  DrawerStyles,
} from "antd/es/drawer/DrawerPanel";
import { MenuItemType } from "antd/es/menu/interface";
import LanguageSwitcher from "./language-switcher";
interface DrawerMenuProps {
  menuItems: MenuItemType[];
  visible: boolean;
  toggleDrawer: () => void;
}

const style = `
.ant-menu-title-content{
    border-bottom:solid
}
`;

/*ant - menu - title - content*/

export const DrawerMenu: FC<DrawerMenuProps> = ({
  menuItems,
  toggleDrawer,
  visible,
}) => {


  const drawerStyles: DrawerStyles = {
    mask: {},
    content: {},
    header: {},
    body: {},
    footer: {},
  };

  return (
    <>
      <style>{style}</style>
      <Drawer
        placement="right"
        onClose={toggleDrawer}
        open={visible}
        styles={drawerStyles}
      >
        <Menu mode="inline" items={menuItems} />
        <LanguageSwitcher />
        <UserDropdownMenu style={{ marginTop: "0.5em", paddingLeft: "2em" }} />
      </Drawer>
    </>
  );
};
