import { Breadcrumbs, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function HeaderBar() {
  const currentLocation = useLocation();

  return (
    <Breadcrumbs aria-label="breadcrumb">
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
    </Breadcrumbs>
  );
}
