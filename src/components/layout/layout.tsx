import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import LeftSidebar from "./left-sidebar";
import HeaderBar from "./header-bar";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DrawerAppBar() {
  const { path } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("path = ", path);
    if (!path) {
      navigate("/run");
    }
  }, [path]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <Box
        component="main"
        sx={{
          width: "240px",
          position: "absolute",
          top: 0,
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <LeftSidebar />
      </Box>
      <Box
        component="main"
        sx={{
          position: "relative",
          padding: "0 20px",
          marginLeft: "240px",
          width: "calc(100vw - 240px)",
        }}
      >
        <Box component="nav" sx={{ position: "sticky", top: 0 }}>
          <HeaderBar />
        </Box>
        <Box sx={{ overflow: "hidden" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
