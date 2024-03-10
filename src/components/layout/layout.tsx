import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./left-sidebar";
import HeaderBar from "./header-bar";

export default function DrawerAppBar() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        component="main"
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <LeftSidebar />
      </Box>
      <Box component="main" sx={{ position: "relative", padding: "0 20px" }}>
        <Box component="nav" sx={{ position: "absolute", top: 0 }}>
          <HeaderBar />
        </Box>
        <Box sx={{ overflow: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
