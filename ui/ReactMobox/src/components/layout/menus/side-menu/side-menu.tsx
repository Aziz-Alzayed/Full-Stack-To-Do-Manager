import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { CSSProperties, FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../../auth/auth-provider/auth-provider";
import { isAdmin, isSuper } from "../../../../auth/auth-services/auth-service";
import { MenuItemType } from "antd/es/menu/interface";
import {
  RoutePaths,
  useLanguageAwareNavigate,
} from "../../../../routing/use-language-aware-navigate ";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../../../localization/translations/base-translation";

export const SideMenuWidth = "13em";
const SideMenu: FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [userIsAdmin, setUserIsAdmin] = useState<boolean>(false);
  const navigateWithLanguage = useLanguageAwareNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    const checkRoles = async () => {
      const isAdminUser = await isAdmin();
      const isSuperUser = await isSuper();
      setUserIsAdmin((user && (isAdminUser || isSuperUser)) || false);
    };

    if (user) {
      checkRoles();
    } else {
      setUserIsAdmin(false);
    }
  }, [user]);
  const menuStyle: CSSProperties = {
    overflowY: "auto",
    height: "100vh",
    position: "fixed",
    left: 0,
  };
  const menuItems: MenuItemType[] = [
    {
      key: RoutePaths.userManagement,
      label: t(TranslationKeys.userManagement),
      onClick: () => navigateWithLanguage(RoutePaths.userManagement),
    },
  ];

  const currentSelectedKey =
    (menuItems.find((item) => location.pathname.startsWith(item.key as string))
      ?.key as string) || "";

  return !userIsAdmin ? (
    <></>
  ) : (
    <Sider style={menuStyle} width={SideMenuWidth}>
      <Menu
        mode="inline"
        selectedKeys={[currentSelectedKey]}
        items={menuItems}
      />
    </Sider>
  );
};
export default SideMenu;
