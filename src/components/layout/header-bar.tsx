import { Box, Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function HeaderBar() {
  const currentLocation = useLocation();

  return (
    <Box
      component={Breadcrumbs}
      aria-label="breadcrumb"
      sx={{
        p: 1,
        fontSize: 16,
        backgroundColor: "rgb(18, 18, 18)",
      }}
    >
      <Link underline="hover" color="inherit" href="/">
        Blog
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        {currentLocation.pathname.split("/")[1]}
      </Link>
    </Box>
  );
}
