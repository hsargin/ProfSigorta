export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18071924771"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18071924771');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}