import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "2.El Trafik Sigortası",
      icon: "/icons/noter.png",
      slug: "2-el-trafik",
      large: true,
    },
    {
      id: 2,
      title: "Trafik Sigortası",
      icon: "/icons/trafik.png",
      slug: "trafik-sigortasi",
      large: true,
    },
    {
      id: 3,
      title: "Kasko Sigortası",
      icon: "/icons/kasko.png",
      slug: "kasko-sigortasi",
      large: true,
    },
    {
      id: 4,
      title: "Tamamlayıcı Sağlık",
      icon: "/icons/tss.png",
      slug: "tamamlayici-saglik",
      large: true,
    },
    {
      id: 5,
      title: "Seyahat Sağlık",
      icon: "/icons/seyahat.png",
      slug: "seyahat-saglik",
      large: false,
    },
    {
      id: 6,
      title: "Yeşil Kart",
      icon: "/icons/yesil.png",
      slug: "yesil-kart",
      large: false,
    },
    {
      id: 7,
      title: "DASK",
      icon: "/icons/dask.png",
      slug: "dask",
      large: false,
    },
    {
      id: 8,
      title: "İşyeri Sigortası",
      icon: "/icons/isyeri.png",
      slug: "isyeri-sigortasi",
      large: false,
    },
    {
      id: 9,
      title: "Özel Sağlık",
      icon: "/icons/ozel.png",
      slug: "ozel-saglik",
      large: false,
    },
  ];

  const topProducts = products.slice(0, 4);
  const bottomProducts = products.slice(4);

  return (
    <main className="page">
      <header className="header">
        <div className="logoWrap">
          <img
            src="/logo-profsigorta-v2.png"
            alt="Prof Sigorta"
            className="logo"
          />
        </div>

        <nav className="desktopNav">
          <span>Ürünlerimiz</span>
          <span>Kampanyalar</span>
          <span>Poliçe İşlemleri</span>
          <span>Poliçe İptal İşlemleri</span>
        </nav>

        <div className="desktopActions">
          <button
            type="button"
            className="waBtn"
            onClick={() => window.open("https://wa.me/905301096161", "_blank")}
          >
            <img src="/icons/wh.svg" alt="WhatsApp" className="waIcon" />
            WhatsApp Destek
          </button>

          <button type="button" className="loginBtn">
            Giriş Yap / Üye Ol
          </button>
        </div>

        <button type="button" className="mobileMenuBtn">
          ☰
        </button>
      </header>

      <section className="hero">
        <div className="leftArea">
          <h1 className="title">Doğru Poliçe, Doğru Fiyat</h1>

          <div className="desktopTopGrid">
            {topProducts.map((p) => (
              <Link
                key={p.id}
                href={`/police/${p.slug}`}
                className="cardLink"
              >
                <div className="card cardLarge">
                  <div className="iconArea iconAreaLarge">
                    <img src={p.icon} alt={p.title} className="iconLarge" />
                  </div>
                  <div className="cardTitle cardTitleLarge">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="desktopBottomGrid">
            {bottomProducts.map((p) => (
              <Link
                key={p.id}
                href={`/police/${p.slug}`}
                className="cardLink"
              >
                <div className="card cardSmall">
                  <div className="iconArea iconAreaSmall">
                    <img src={p.icon} alt={p.title} className="iconSmall" />
                  </div>
                  <div className="cardTitle cardTitleSmall">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mobileGrid">
            {products.map((p) => (
              <Link
                key={p.id}
                href={`/police/${p.slug}`}
                className="cardLink"
              >
                <div className="card mobileCard">
                  <div className="iconArea mobileIconArea">
                    <img
                      src={p.icon}
                      alt={p.title}
                      className={p.large ? "iconMobileLarge" : "iconMobileSmall"}
                    />
                  </div>
                  <div className="cardTitle mobileCardTitle">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="avatarArea">
          <img
            src="/avatar-v3.png"
            alt="Prof Sigorta Avatar"
            className="avatar"
          />
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(
            180deg,
            #f0f2f5 0%,
            #e6ebee 40%,
            #dde3e8 100%
          );
          font-family: -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI",
            sans-serif;
          color: #333;
          overflow-x: hidden;
        }

        .header {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .logo {
          height: 54px;
          width: auto;
          display: block;
        }

        .desktopNav {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 15px;
          font-weight: 500;
          color: #555;
        }

        .desktopActions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .waBtn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          border-radius: 999px;
          border: 1.2px solid #25d366;
          background: #eafff1;
          font-size: 14px;
          font-weight: 700;
          color: #128c7e;
          cursor: pointer;
        }

        .waIcon {
          width: 18px;
          height: 18px;
        }

        .loginBtn {
          padding: 9px 22px;
          border-radius: 999px;
          border: 1.2px solid #ff7f32;
          background: #fff8f3;
          font-size: 14px;
          font-weight: 700;
          color: #d96615;
          cursor: pointer;
        }

        .mobileMenuBtn {
          display: none;
          width: 52px;
          height: 52px;
          border: none;
          border-radius: 16px;
          background: #f2f2f2;
          font-size: 28px;
          color: #444;
          cursor: pointer;
        }

        .hero {
          max-width: 1180px;
          margin: 32px auto 56px;
          padding: 0 32px;
          display: flex;
          align-items: center;
          gap: 34px;
          box-sizing: border-box;
        }

        .leftArea {
          flex: 1 1 auto;
          min-width: 0;
        }

        .title {
          font-size: 34px;
          font-weight: 700;
          margin: 0 0 24px;
          color: #444;
          text-align: center;
        }

        .desktopTopGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 26px;
        }

        .desktopBottomGrid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
        }

        .mobileGrid {
          display: none;
        }

        .cardLink {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .card {
          background: #fcfcfc;
          border-radius: 22px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.02);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
        }

        .cardLarge {
          height: 170px;
          padding: 16px 12px 12px;
          display: flex;
          flex-direction: column;
        }

        .cardSmall {
          height: 160px;
          padding: 14px 10px 10px;
          display: flex;
          flex-direction: column;
        }

        .iconArea {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .iconLarge {
          width: 96px;
          height: 96px;
          object-fit: contain;
          display: block;
        }

        .iconSmall {
          width: 70px;
          height: 70px;
          object-fit: contain;
          display: block;
        }

        .cardTitle {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          text-align: center;
          color: #333;
          font-weight: 600;
        }

        .cardTitleLarge {
          min-height: 42px;
          font-size: 15px;
          line-height: 20px;
          padding-bottom: 8px;
        }

        .cardTitleSmall {
          min-height: 38px;
          font-size: 14px;
          line-height: 19px;
          padding-bottom: 6px;
          color: #444;
        }

        .avatarArea {
          flex: 0 0 220px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .avatar {
          max-height: 520px;
          width: auto;
          display: block;
        }

        @media (max-width: 900px) {
          .header {
            height: auto;
            min-height: 84px;
            padding: 14px 16px;
          }

          .logo {
            height: 46px;
          }

          .desktopNav,
          .desktopActions,
          .avatarArea,
          .desktopTopGrid,
          .desktopBottomGrid {
            display: none;
          }

          .mobileMenuBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .hero {
            max-width: 100%;
            margin: 18px auto 28px;
            padding: 0 14px;
            display: block;
          }

          .title {
            font-size: 30px;
            line-height: 36px;
            margin-bottom: 18px;
          }

          .mobileGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          .mobileCard {
            min-height: 176px;
            padding: 14px 10px 10px;
            display: flex;
            flex-direction: column;
          }

          .mobileIconArea {
            flex: 1;
            min-height: 86px;
          }

          .iconMobileLarge {
            width: 88px;
            height: 88px;
            object-fit: contain;
            display: block;
          }

          .iconMobileSmall {
            width: 68px;
            height: 68px;
            object-fit: contain;
            display: block;
          }

          .mobileCardTitle {
            min-height: 40px;
            font-size: 13px;
            line-height: 18px;
            font-weight: 700;
            color: #2f3b52;
            padding-bottom: 6px;
          }
        }
      `}</style>
    </main>
  );
}