"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(1400);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = windowWidth <= 992;
  const isSmallMobile = windowWidth <= 640;
  const isTablet = windowWidth <= 1200;

  const products = [
    { id: 1, title: "2.El Trafik Sigortası", icon: "/icons/noter.png", slug: "2-el-trafik" },
    { id: 2, title: "Trafik Sigortası", icon: "/icons/trafik.png", slug: "trafik-sigortasi" },
    { id: 3, title: "Kasko Sigortası", icon: "/icons/kasko.png", slug: "kasko-sigortasi" },
    { id: 4, title: "Tamamlayıcı Sağlık", icon: "/icons/tss.png", slug: "tamamlayici-saglik" },
    { id: 5, title: "Seyahat Sağlık", icon: "/icons/seyahat.png", slug: "seyahat-saglik" },
    { id: 6, title: "Yeşil Kart", icon: "/icons/yesil.png", slug: "yesil-kart" },
    { id: 7, title: "DASK", icon: "/icons/dask.png", slug: "dask" },
    { id: 8, title: "İşyeri Sigortası", icon: "/icons/isyeri.png", slug: "isyeri-sigortasi" },
    { id: 9, title: "Özel Sağlık", icon: "/icons/ozel.png", slug: "ozel-saglik" },
  ];

  const topProducts = products.slice(0, 4);
  const bottomProducts = products.slice(4);

  const topCardDesktopWidth = 220;
  const bottomCardDesktopWidth = 180;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f0f2f5 0%, #e6ebee 40%, #dde3e8 100%)",
        fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", sans-serif',
        color: "#333333",
      }}
    >
      <header
        style={{
          height: isSmallMobile ? 68 : 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 12px" : isTablet ? "0 28px" : "0 48px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <img
            src="/logo-profsigorta-v2.png"
            alt="Prof Sigorta"
            style={{
              height: isSmallMobile ? 42 : 54,
              width: "auto",
              display: "block",
            }}
          />
        </div>

        {!isMobile && (
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: isTablet ? 18 : 28,
              fontSize: isTablet ? 14 : 15,
              fontWeight: 500,
              color: "#4b5563",
            }}
          >
            <span style={{ cursor: "pointer", color: "#4b5563" }}>Ürünlerimiz</span>
            <span style={{ cursor: "pointer", color: "#4b5563" }}>Kampanyalar</span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                color: "#4b5563",
              }}
            >
              <span style={{ color: "#4b5563" }}>Poliçe İşlemleri</span>
              <span style={{ fontSize: 10, color: "#4b5563" }}>▼</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                color: "#4b5563",
              }}
            >
              <span style={{ color: "#4b5563" }}>Poliçe İptal İşlemleri</span>
              <span style={{ fontSize: 10, color: "#4b5563" }}>▼</span>
            </div>
          </nav>
        )}

        {!isMobile ? (
          <div style={{ display: "flex", alignItems: "center", gap: isTablet ? 8 : 12 }}>
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: isTablet ? "9px 16px" : "9px 20px",
                borderRadius: 999,
                border: "1.2px solid #25D366",
                backgroundColor: "#eafff1",
                fontSize: isTablet ? 13 : 14,
                fontWeight: 700,
                color: "#128c7e",
                cursor: "pointer",
              }}
            >
              <img
                src="/icons/wh.svg"
                alt="WhatsApp"
                style={{ width: 18, height: 18, display: "inline-block" }}
              />
              <span style={{ color: "#128c7e" }}>WhatsApp Destek</span>
            </button>

            <button
              type="button"
              style={{
                padding: isTablet ? "9px 16px" : "9px 22px",
                borderRadius: 999,
                border: "1.2px solid #ff7f32",
                backgroundColor: "#fff8f3",
                fontSize: isTablet ? 13 : 14,
                fontWeight: 700,
                color: "#d96615",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#d96615" }}>Giriş Yap / Üye Ol</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            aria-label="Menü"
            style={{
              width: 40,
              height: 40,
              border: "none",
              borderRadius: 10,
              background: "#f4f6f8",
              color: "#333333",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ☰
          </button>
        )}
      </header>

      <div
        style={{
          maxWidth: 1520,
          margin: isMobile ? "18px auto 30px" : "26px auto 56px",
          padding: isMobile ? "0 12px" : isTablet ? "0 24px" : "0 36px",
          display: isMobile ? "block" : "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: isTablet ? 20 : 28,
          paddingLeft: isMobile ? "12px" : isTablet ? "42px" : "64px",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : 1000,
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: isSmallMobile ? 24 : isMobile ? 28 : 34,
              fontWeight: 700,
              margin: "0 0 22px 0",
              color: "#374151",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Doğru Poliçe, Doğru Fiyat
          </h1>

          <div
            style={
              isMobile
                ? {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: isSmallMobile ? 10 : 12,
                  }
                : {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 20,
                    marginBottom: 28,
                    flexWrap: "nowrap",
                  }
            }
          >
            {topProducts.map((p) => (
              <Link
                key={p.id}
                href={`/police/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    borderRadius: isSmallMobile ? 16 : 22,
                    backgroundColor: "#fcfcfc",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    width: isMobile ? "100%" : topCardDesktopWidth,
                    minWidth: isMobile ? "auto" : topCardDesktopWidth,
                    maxWidth: isMobile ? "100%" : topCardDesktopWidth,
                    height: isSmallMobile ? 138 : isMobile ? 148 : 150,
                    padding: isSmallMobile ? "14px 10px" : isMobile ? "16px 12px" : "18px 16px",
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.title}
                    style={{
                      width: isSmallMobile ? 68 : isMobile ? 76 : 88,
                      height: isSmallMobile ? 68 : isMobile ? 76 : 88,
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto 12px auto",
                    }}
                  />
                  <div
                    style={{
                      fontSize: isSmallMobile ? 12.5 : isMobile ? 13 : 15,
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: "#374151",
                      whiteSpace: isMobile ? "normal" : "nowrap",
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ height: isMobile ? 12 : 0 }} />

          <div
            style={
              isMobile
                ? {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: isSmallMobile ? 10 : 12,
                  }
                : {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 18,
                    flexWrap: "nowrap",
                  }
            }
          >
            {bottomProducts.map((p) => (
              <Link
                key={p.id}
                href={`/police/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    borderRadius: isSmallMobile ? 16 : 22,
                    backgroundColor: "#fcfcfc",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    width: isMobile ? "100%" : bottomCardDesktopWidth,
                    minWidth: isMobile ? "auto" : bottomCardDesktopWidth,
                    maxWidth: isMobile ? "100%" : bottomCardDesktopWidth,
                    height: isSmallMobile ? 138 : isMobile ? 148 : 150,
                    padding: isSmallMobile ? "14px 10px" : isMobile ? "16px 12px" : "18px 14px",
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.title}
                    style={{
                      width: isSmallMobile ? 54 : isMobile ? 60 : 70,
                      height: isSmallMobile ? 54 : isMobile ? 60 : 70,
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto 12px auto",
                    }}
                  />
                  <div
                    style={{
                      fontSize: isSmallMobile ? 12.5 : isMobile ? 13 : 14,
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: "#374151",
                      whiteSpace: isMobile ? "normal" : "nowrap",
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
            width: isTablet ? 230 : 255,
            display: isMobile ? "none" : "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: 46,
            flexShrink: 0,
            marginLeft: isTablet ? "-6px" : "-12px",
          }}
        >
          <img
            src="/avatar-v3.png"
            alt="Prof Sigorta Avatar"
            style={{
              width: "100%",
              maxWidth: isTablet ? 215 : 240,
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>
    </main>
  );
}