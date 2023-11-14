import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
// Disabling SSR on NavBar component
const NavBar = dynamic(() => import("../components/AuthNavBar"), {
  ssr: false,
});

const NewNavBar = dynamic(() => import("../components/NavBar"), {
  ssr: false,
});

let userToken: String | null;

if (typeof window !== "undefined") {
  console.log("You are on the browser");
  // 👉️ can use localStorage here

  localStorage.setItem("name", "Tom");

  userToken = localStorage.getItem("userId");
} else {
  console.log("You are on the server");
  // 👉️ can't use localStorage
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {


  useEffect(() =>{

  },[userToken])
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      {userToken ? <NavBar /> : <NewNavBar />}

      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
