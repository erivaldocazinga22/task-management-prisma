import { QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { queryClient } from "./core/lib/queryClient";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { env } from "./core/lib/env";
import { Routers } from "./router";
import { StrictMode } from "react";

import "@/globals.css";

createRoot(document.getElementById("root")!).render(
  	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
				<RouterProvider router={Routers} />
				<Toaster />
			</GoogleOAuthProvider>
		</QueryClientProvider>
  	</StrictMode>,
)
