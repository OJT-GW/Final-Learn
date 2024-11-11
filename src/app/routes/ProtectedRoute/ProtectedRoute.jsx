import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./ProtectedRoute.scss";

const { Content } = Layout;

export const ProtectedRoute = () => {
  return (
    <Layout id="layout-container">
      <Layout>
        <Content className="mt-6 mx-6">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
