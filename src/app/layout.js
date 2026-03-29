export const metadata = {
  title: "Prof Sigorta | Doğru Teklif, Doğru Fiyat",
  description:
    "Trafik, kasko, DASK, sağlık ve diğer sigortalar için hızlı teklif alın.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}