import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Script from "next/script"; // Importing the Script component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AVN Music Studio",
  description: "AVN Music Studio is a professional music studio in Ranchi, Jharkhand, offering high-quality recording, music production for hip hop artists, singers, corporate ads, and background scoring. Elevate your sound with expert services for artists and brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Google Tag Manager Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KK38CLHRMG"
          strategy="afterInteractive" // Loads the script after page is interactive
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KK38CLHRMG');
          `}
        </Script>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7PGTCHS"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
      <head>
        <meta name="google-site-verification" content="6OahjAwwsChOQROOfrq8ESlkcuzYi92k58NKLq9j3Zk" />
        {/* Google Tag Manager Script */}
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M7PGTCHS');
    `}
        </Script>
      </head>
    </html>
  );
}
