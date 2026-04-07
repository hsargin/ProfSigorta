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

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f0f2f5 0%, #e6ebee 40%, #dde3e8 100%)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, system-ui, Segoe UI, sans-serif",
        color: "#333",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }

        .ps-header {
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .ps-header-inner {
          max-width: 1400px;
          margin: 0 auto;
          min-height: 76px;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ps-logo {
          height: 54px;
          width: auto;
          display: block;
        }

        .ps-nav {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 15px;
          font-weight: 500;
          color: #555;
          white-space: nowrap;
        }

        .ps-nav-dd {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .ps-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
        }

        .ps-btn-wa {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          border-radius: 999px;
          border: 1.2px solid #25D366;
          background-color: #eafff1;
          font-size: 14px;
          font-weight: 700;
          color: #128c7e;
          cursor: pointer;
        }

        .ps-btn-login {
          padding: 9px 22px;
          border-radius: 999px;
          border: 1.2px solid #ff7f32;
          background-color: #fff8f3;
          font-size: 14px;
          font-weight: 700;
          color: #d96615;
          cursor: pointer;
        }

        .ps-shell {
          max-width: 1320px;
          margin: 0 auto;
          padding: 32px 24px 56px;
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .ps-left {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ps-title {
          font-size: 34px;
          font-weight: 700;
          margin: 0 0 18px;
          color: #444;
          text-align: center;
        }

        .ps-row-top {
          width: 100%;
          max-width: 1040px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 28px;
        }

        .ps-row-bottom {
          width: 100%;
          max-width: 1040px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .ps-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .ps-link:hover .ps-card-top,
        .ps-link:hover .ps-card-bottom {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0,0,0,0.07);
        }

        .ps-card-top {
          width: 100%;
          min-height: 150px;
          padding: 20px 22px;
        }

        .ps-card-bottom {
          width: 100%;
          min-height: 150px;
          padding: 18px 20px;
        }

        .ps-title-top {
          font-size: 15px;
          font-weight: 600;
          color: #333;
          line-height: 1.25;
          white-space: normal;
        }

        .ps-title-bottom {
          font-size: 14px;
          font-weight: 600;
          color: #444;
          line-height: 1.25;
          white-space: normal;
        }

        .ps-avatar-wrap {
          flex: 0 0 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 14px;
        }

        .ps-avatar {
          max-height: 470px;
          width: auto;
          max-width: 100%;
          display: block;
        }

        @media (max-width: 1180px) {
          .ps-header-inner {
            padding: 12px 20px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .ps-nav {
            order: 2;
            width: 100%;
            justify-content: center;
            gap: 18px;
            flex-wrap: wrap;
          }

          .ps-actions {
            order: 3;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }

          .ps-shell {
            padding: 28px 18px 46px;
            flex-direction: column;
          }

          .ps-avatar-wrap {
            flex: 0 0 auto;
            padding-top: 0;
          }

          .ps-avatar {
            max-height: 340px;
          }
        }

        @media (max-width: 900px) {
          .ps-row-top {
            grid-template-columns: repeat(2, 1fr);
          }

          .ps-row-bottom {
            grid-template-columns: repeat(2, 1fr);
          }

          .ps-title {
            font-size: 28px;
          }
        }

        @media (max-width: 640px) {
          .ps-header-inner {
            padding: 12px 14px;
          }

          .ps-logo {
            height: 44px;
          }

          .ps-nav {
            display: none;
          }

          .ps-actions {
            flex-direction: column;
            gap: 10px;
          }

          .ps-btn-wa,
          .ps-btn-login {
            width: 100%;
            max-width: 280px;
            justify-content: center;
            font-size: 13px;
            padding: 8px 14px;
          }

          .ps-shell {
            padding: 20px 14px 34px;
          }

          .ps-title {
            font-size: 24px;
            margin-bottom: 14px;
          }

          .ps-row-top,
          .ps-row-bottom {
            gap: 14px;
          }

          .ps-card-top,
          .ps-card-bottom {
            min-height: 132px;
            padding: 16px 12px;
          }

          .ps-top-icon {
            width: 76px !important;
            height: 76px !important;
            margin-bottom: 8px !important;
          }

          .ps-bottom-icon {
            width: 58px !important;
            height: 58px !important;
            margin-bottom: 8px !important;
          }

          .ps-title-top,
          .ps-title-bottom {
            font-size: 13px;
          }

          .ps-avatar-wrap {
            display: none;
          }
        }

        @media (max-width: 430px) {
          .ps-row-top,
          .ps-row-bottom {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="ps-header">
        <div className="ps-header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/logo-profsigorta-v2.png"
              alt="Prof Sigorta"
              className="ps-logo"
            />
          </div>

          <nav className="ps-nav">
            <span style={{ cursor: "pointer" }}>Ürünlerimiz</span>
            <span style={{ cursor: "pointer" }}>Kampanyalar</span>

            <div className="ps-nav-dd">
              <span>Poliçe İşlemleri</span>
              <span style={{ fontSize: 10 }}>▼</span>
            </div>

            <div className="ps-nav-dd">
              <span>Poliçe İptal İşlemleri</span>
              <span style={{ fontSize: 10 }}>▼</span>
            </div>
          </nav>

          <div className="ps-actions">
            <button className="ps-btn-wa">
              <img
                src="/icons/wh.svg"
                alt="WhatsApp"
                style={{ width: 18, height: 18, display: "inline-block" }}
              />
              WhatsApp Destek
            </button>

            <button className="ps-btn-login">Giriş Yap / Üye Ol</button>
          </div>
        </div>
      </header>

      <div className="ps-shell">
        <div className="ps-left">
          <h1 className="ps-title">Doğru Poliçe, Doğru Fiyat</h1>

          <div className="ps-row-top">
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href={"/police/" + p.slug}
                className="ps-link"
              >
                <div style={cardBaseStyle} className="ps-card-top">
                  <img
                    src={p.icon}
                    alt={p.title}
                    className="ps-top-icon"
                    style={{
                      width: p.slug === "kasko-sigortasi" ? 94 : 100,
                      height: p.slug === "kasko-sigortasi" ? 94 : 100,
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto 10px auto",
                    }}
                  />
                  <div className="ps-title-top">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="ps-row-bottom">
            {products.slice(4, 9).map((p) => (
              <Link
                key={p.id}
                href={"/police/" + p.slug}
                className="ps-link"
              >
                <div style={cardBaseStyle} className="ps-card-bottom">
                  <img
                    src={p.icon}
                    alt={p.title}
                    className="ps-bottom-icon"
                    style={{
                      width: 72,
                      height: 72,
                      objectFit: "contain",
                      marginBottom: 10,
                    }}
                  />
                  <div className="ps-title-bottom">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="ps-avatar-wrap">
          <img
            src="/avatar-v3.png"
            alt="Prof Sigorta Avatar"
            className="ps-avatar"
          />
        </div>
      </div>
    </main>
  );
}