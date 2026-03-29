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
    borderRadius: "18px",
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
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/logo-profsigorta-v2.png"
            alt="Prof Sigorta"
            style={{ height: 54 }}
          />
        </div>

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
            <span style={{ fontSize: 10 }}>?</span>
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
            <span style={{ fontSize: 10 }}>?</span>
          </div>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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

      <div
        style={{
          maxWidth: 1180,
          margin: "32px auto 56px",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          gap: 36,
        }}
      >
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
              marginBottom: 26,
              color: "#444",
              textAlign: "center",
            }}
          >
            Doğru Poliçe, Doğru Fiyat
          </h1>

          <div
            style={{
              width: 1040,
              maxWidth: "100%",
              margin: "0 auto 36px auto",
              display: "flex",
              justifyContent: "space-between",
              gap: 22,
            }}
          >
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href={"/police/" + p.slug}
                style={{ textDecoration: "none", color: "inherit", flex: 1 }}
              >
                <div
                  style={{
                    ...cardBaseStyle,
                    height: 138,
                    padding: "16px 12px 12px",
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.title}
                    style={{
                      width: 88,
                      height: 88,
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto 12px auto",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      color: "#333",
                      marginTop: 8,
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              width: 1040,
              maxWidth: "100%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              gap: 22,
            }}
          >
            {products.slice(4, 9).map((p) => (
              <Link
                key={p.id}
                href={"/police/" + p.slug}
                style={{ textDecoration: "none", color: "inherit", flex: 1 }}
              >
                <div
                  style={{
                    ...cardBaseStyle,
                    height: 132,
                    padding: "14px 10px 10px",
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.title}
                    style={{
                      width: 66,
                      height: 66,
                      objectFit: "contain",
                      marginBottom: 12,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      color: "#444",
                      marginTop: 6,
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            flex: "0 0 240px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft: -30,
          }}
        >
          <img
            src="/avatar-v3.png"
            alt="Prof Sigorta Avatar"
            style={{
              maxHeight: 520,
              width: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
    </main>
  );
}