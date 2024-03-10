import { useParams } from "react-router-dom";

function Page() {
  const { path } = useParams<{
    path: string;
  }>();
  return (
    <div>
      <h1>Page: {path}</h1>
    </div>
  );
}

export default Page;
