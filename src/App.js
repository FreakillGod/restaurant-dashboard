import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Layout, Image, Slider } from "antd";
import CreateMenu from "./pages/CreateMenu";
import RestaurantMenu from "./pages/RestaurantMenu";
import DetailedOrder from "./pages/DetailedOrder";
import Orders from "./pages/Orders";
import SideMenu from "./components/Sidemenu";
import OrderHistory from "./pages/OrderHistory";
import Settings from "./pages/Settings";

function App() {
  const { Sider, Content, Footer } = Layout;

  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "#fff" }}>
        <Image
          preview={false}
          src="https://images.unsplash.com/photo-1572037604517-4651d6444ffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/order/:id" element={<DetailedOrder />} />
            <Route path="/menu" element={<RestaurantMenu />} />
            <Route path="/menu/create" element={<CreateMenu />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center", marginTop: "auto" }}>
          CURRY 65 Dashboard copyright @2022
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
