import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import { CircularProgress } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="flex w-screen h-screen items-center justify-center">
            <CircularProgress classes={{ svg: "text-primary" }} />
          </div>
        }
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StrictMode>
);
