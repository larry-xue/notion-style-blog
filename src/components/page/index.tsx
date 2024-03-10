import { Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import templateBlog from "../../blogs/template-blog.md?raw";

function Page() {
  return (
    <Box sx={{ p: 3, boxSizing: "border-box" }}>
      <ReactMarkdown>{templateBlog}</ReactMarkdown>
    </Box>
  );
}

export default Page;
