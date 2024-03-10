import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Search, Settings, Add } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const StyledMenuItem = styled(MenuItem)({
  gap: "12px",
});

export default function LeftSidebar() {
  const navigate = useNavigate();
  const handleGoToPage = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        color: "rgba(155, 155, 155)",
        backgroundColor: "rgb(32, 32, 32)",
      }}
    >
      <Box component={StyledMenuItem}>
        <Avatar
          sx={{ bgcolor: deepPurple[300], width: 24, height: 24 }}
          alt="Larry Xue"
        >
          L
        </Avatar>
        <Typography>Larry Xue's Blog</Typography>
      </Box>
      <MenuList>
        <StyledMenuItem>
          <Search />
          <Typography variant="inherit">Search</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Settings />
          <Typography variant="inherit">Settings</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Add />
          <Typography variant="inherit">New Page</Typography>
        </StyledMenuItem>
      </MenuList>
      <MenuList>
        <StyledMenuItem onClick={() => handleGoToPage("/run")}>
          <Typography variant="inherit">😶‍🌫️ Run</Typography>
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleGoToPage("/work-space")}>
          <Typography variant="inherit" noWrap>
            🤯 Work Space
          </Typography>
        </StyledMenuItem>
      </MenuList>
    </Box>
  );
}
