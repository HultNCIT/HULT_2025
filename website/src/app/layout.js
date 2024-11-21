import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "HULT AT NICT 2025",
  description: "Created by HULT NCIT 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"w-full"}>
        {/* {children} */}
        <header>
          <Header />
        </header>
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
