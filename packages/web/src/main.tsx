import { QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { queryClient } from "./core/lib/queryClient";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { env } from "./core/lib/env";
import { Routers } from "./router";
import { StrictMode } from "react";

import "@/globals.css";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
    			<RouterProvider router={Routers} />
				<ToastContainer />
			</GoogleOAuthProvider>
		</QueryClientProvider>
  	</StrictMode>,
)
