import React, { FC, PropsWithChildren } from "react";
import { Layout } from "antd";
import HeaderMenu from "./menus/header-menu/header-menu";
import SideMenu, { SideMenuWidth } from "./menus/side-menu/side-menu";
import BackTopFloatingButton from "./floating-buttons/back-top-button";
import { AppFooter } from "./menus/footer/footer";
import { useAuth } from "../../auth/auth-provider/auth-provider";
import { AppRoles } from "../../auth/auth-services/role-management";

const { Content } = Layout;

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const { roles } = useAuth();
  const isAdmin =
    roles?.includes(AppRoles.Admin) || roles?.includes(AppRoles.Super);
  const contentLayoutStyle: React.CSSProperties = {
    marginLeft: isAdmin ? SideMenuWidth : 0,
    overflowY: "auto",
  };

  const contentStyle: React.CSSProperties = {
    background: "#fff",
    overflowY: "auto",
  };

  const layoutStyle: React.CSSProperties = {
    minHeight: "100vh",
  };

  const mainContainerStyle: React.CSSProperties = {
    marginTop: "4.5em",
  };

  return (
    <Layout style={layoutStyle}>
      <HeaderMenu />
      <Layout style={mainContainerStyle}>
        {isAdmin && <SideMenu />}
        <Layout style={contentLayoutStyle}>
          <Content style={contentStyle}>{children}</Content>
          <BackTopFloatingButton />
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
