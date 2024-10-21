import { useState, useEffect, CSSProperties, FC } from "react";
import { Menu, Button, Space } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons"; // For the toggle button icon
import UserDropdownMenu from "./user-dropdown-menu";
import logoImage from "../../../../assets/images/Logo-White.png";
import { Header } from "antd/es/layout/layout";
import { DrawerMenu } from "./drawer-menu";
import { MenuItemType } from "antd/es/menu/interface";
import { useAuth } from "../../../../auth/auth-provider/auth-provider";
import LanguageSwitcher from "./language-switcher";
import { RoutePaths, useLanguageAwareNavigate } from "../../../../routing/use-language-aware-navigate ";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../../../localization/translations/base-translation";

const HeaderMenu: FC = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { user } = useAuth();
  const navigateWithLanguage = useLanguageAwareNavigate();
  const { t } = useTranslation();
  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle drawer visibility
  const toggleDrawer = () => setVisible(!visible);

  const headerStyle: CSSProperties = {
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: 10,
    width: "100%",
  };

  const logoDivStyle: CSSProperties = {
    minWidth: "182px",
    height: "32px",
    marginInlineEnd: "24px",
    display: "flex", // Ensures contents are centered
    alignItems: "center", // Vertically centers the image
    justifyContent: "center", // Horizontally centers the image
    cursor: "pointer",
  };

  const logoImageStyle: CSSProperties = {
    maxWidth: "100%", // Ensures the image does not exceed the container's width
    maxHeight: "100%", // Ensures the image does not exceed the container's height
    objectFit: "contain", // Maintains the aspect ratio of the image
  };

  const menuItems: MenuItemType[] = [
    {
      key: RoutePaths.home,
      label: t(TranslationKeys.homePage),
      onClick: () => navigateWithLanguage(RoutePaths.home),
    },
    {
      key: RoutePaths.tasks,
      label: t(TranslationKeys.tasks),
      onClick: () => navigateWithLanguage(RoutePaths.tasks),
      disabled: user === undefined,
    },
  ];

  const currentSelectedKey =
    (menuItems.find((item) => location.pathname === item.key)?.key as string) ||
    "";

  return (
    <>
      <Header style={headerStyle}>
        <div style={logoDivStyle} onClick={() => navigateWithLanguage(RoutePaths.home)}>
          <img src={logoImage} alt="Logo" style={logoImageStyle} />
        </div>
        {!isMobile ? (
          <>
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{ width: "85%" }}
              selectedKeys={[currentSelectedKey]}
            />
            <Space>
              <LanguageSwitcher />
              <UserDropdownMenu />
            </Space>
          </>
        ) : (
          <Button icon={<MenuFoldOutlined />} onClick={toggleDrawer} />
        )}
      </Header>
      {visible && (
        <DrawerMenu
          visible={visible}
          menuItems={menuItems}
          toggleDrawer={toggleDrawer}
        />
      )}
    </>
  );
};

export default HeaderMenu;
