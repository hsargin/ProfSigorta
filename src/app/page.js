// src/app/page.js
import Link from "next/link";

export default function Home() {
  const products = [
  {
    id: 1,
    title: "2.El Trafik Sigortası",
    icon: "/icons/noter.png",
    important: true,
    slug: "2-el-trafik",
  },
  {
    id: 2,
    title: "Trafik Sigortası",
    icon: "/icons/trafik.png",
    important: true,
    slug: "trafik-sigortasi",
  },
  {
    id: 3,
    title: "Kasko Sigortası",
    icon: "/icons/kasko.png",
    important: true,
    slug: "kasko-sigortasi",
  },
  {
    id: 4,
    title: "Tamamlayıcı Sağlık",
    icon: "/icons/tss.png",
    important: true,
    slug: "tamamlayici-saglik",
  },
  {
    id: 5,
    title: "Seyahat Sağlık",
    icon: "/icons/seyahat.png",
    important: false,
    slug: "seyahat-saglik",
  },
  {
    id: 6,
    title: "Yeşil Kart",
    icon: "/icons/yesil.png",
    important: false,
    slug: "yesil-kart",
  },
  {
    id: 7,
    title: "DASK",
    icon: "/icons/dask.png",
    important: false,
    slug: "dask",
  },
  {
    id: 8,
    title: "İşyeri Sigortası",
    icon: "/icons/isyeri.png",
    important: false,
    slug: "isyeri-sigortasi",
  },
  {
    id: 9,
    title: "Özel Sağlık",
    icon: "/icons/ozel.png",
    important: false,
    slug: "ozel-saglik",
  },
];

  const cardBaseStyle = {
    borderRadius: "22px",
    backgroundColor: "#fcfcfc",
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  };

  const headerHeight = 76;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f0f2f5 0%, #e6ebee 40%, #dde3e8 100%)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, system-ui, Segoe UI, sans-serif",
        color: "#333",
      }}
    >
      {/* Üst Menü */}
      <header
        style={{
          height: headerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/logo-profsigorta-v2.png"
            alt="Prof Sigorta"
            style={{ height: 54 }}
          />
        </div>

        {/* Menü */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 15,
            fontWeight: 500,
            color: "#555",
          }}
        >
          <span style={{ cursor: "pointer" }}>Ürünlerimiz</span>
          <span style={{ cursor: "pointer" }}>Kampanyalar</span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >
            <span>Poliçe İşlemleri</span>
            <span style={{ fontSize: 10 }}>▼</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >
            <span>Poliçe İptal İşlemleri</span>
            <span style={{ fontSize: 10 }}>▼</span>
          </div>
        </nav>

        {/* Sağ taraf */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* WhatsApp */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 20px",
              borderRadius: 999,
              border: "1.2px solid #25D366",
              backgroundColor: "#eafff1",
              fontSize: 14,
              fontWeight: 700,
              color: "#128c7e",
              cursor: "pointer",
            }}
          >
            <img
              src="/icons/wh.svg"
              alt="WhatsApp"
              style={{
                width: 18,
                height: 18,
                display: "inline-block",
              }}
            />
            WhatsApp Destek
          </button>

          {/* Tek buton: Giriş Yap / Üye Ol */}
          <button
            style={{
              padding: "9px 22px",
              borderRadius: 999,
              border: "1.2px solid #ff7f32",
              backgroundColor: "#fff8f3",
              fontSize: 14,
              fontWeight: 700,
              color: "#d96615",
              cursor: "pointer",
            }}
          >
            Giriş Yap / Üye Ol
          </button>
        </div>
      </header>

      {/* Gövde */}
      <div
        style={{
          maxWidth: 1180,
          margin: "32px auto 56px",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* SOL: Başlık + kartlar */}
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: 34,
              fontWeight: 700,
              marginTop: 0,
              marginBottom: 18,
              color: "#444",
              textAlign: "center",
            }}
          >
            Doğru Poliçe, Doğru Fiyat
          </h1>

          {/* Üst sıra: 4 önemli ürün */}
          <div
            style={{
              width: 1040,
              maxWidth: "100%",
              margin: "0 auto 28px auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href={"/police/" + p.slug}   // ← backtick yok, sorun yok :)
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    ...cardBaseStyle,
                    width: 230,
                    height: 150,
                    padding: "20px 22px",
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.title}
                    style={{
                      width: 100,
                      height: 100,
                      display: "block",
                      margin: "0 auto 10px auto",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      color: "#333",
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Alt sıra: 5 ürün */}
          <div
            style={{
              width: 1040,
              maxWidth: "100%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {products.slice(4, 9).map((p) => (
              <Link
                key={p.id}
                href={"/police/" + p.slug}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    ...cardBaseStyle,
                    width: 180,
                    height: 150,
                    padding: "18px 20px",
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.title}
                    style={{
                      width: 72,
                      height: 72,
                      objectFit: "contain",
                      marginBottom: 10,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      color: "#444",
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SAĞ: Avatar */}
        <div
          style={{
            flex: "0 0 260px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: -80,
          }}
        >
          <img
            src="/avatar-v3.png"
            alt="Prof Sigorta Avatar"
            style={{
              maxHeight: 480,
            }}
          />
        </div>
      </div>
    </main>
  );
}