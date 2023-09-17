
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontSize: "2rem",
    }} id="error-page">
      <h1>Oops!</h1><br />
      <p>Sorry, an unexpected error has occurred.</p>
      <br />
      <p>
        <i>URL: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}