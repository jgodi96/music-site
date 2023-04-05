import "@/styles/globals.css";
import { Work_Sans } from "@next/font/google";
import { AppProvider } from "../context/app-context";
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <main className={workSans.className}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
