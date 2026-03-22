"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    tc: "",
    boy: "",
    kilo: "",
    telefon: "",
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendWhatsapp() {
    const mesaj = `Tamamlayıcı Sağlık Sigortası Teklif Talebi

Ad: ${form.ad}
Soyad: ${form.soyad}
TC: ${form.tc}
Boy: ${form.boy}
Kilo: ${form.kilo}
Telefon: ${form.telefon}
E-posta: ${form.email}

Kaynak: Web Form`;

    const url = "https://wa.me/905301096161?text=" + encodeURIComponent(mesaj);
    window.open(url, "_blank");
  }

  // ✅ KISALTTIK: padding + marginBottom azaltıldı
  const inputStyle = {
    width: "100%",
    padding: "10px 12px",       // 14 -> 10 (kısalır)
    border: "1px solid #d7dde5",
    borderRadius: "10px",
    marginBottom: "14px",        // 12 -> 8 (kısalır)
    background: "#ffffff",
    color: "#1f2a37",
    outline: "none",
    fontSize: "14px",
    boxShadow: "0 1px 0 rgba(16,24,40,0.02)",
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#334155",
    marginBottom: "5px",        // 6 -> 5 (ufak kısalma)
    display: "block",
  };

  return (
    <div
      style={{
        background: "#f4f6f9",
        minHeight: "100vh",
        fontFamily:
          'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
        paddingBottom: "60px", // ✅ sayfanın altında ferah boşluk
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e9edf3",
          padding: "14px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="Prof Sigorta"
            style={{ height: "54px", width: "auto", display: "block" }}
          />
          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "800",
                color: "#0f172a",
                letterSpacing: "0.3px",
              }}
            ></div>
            <div style={{ fontSize: "12px", color: "#64748b" }}></div>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "12px", color: "#64748b" }}>
            Doğru Teklif , Doğru Fiyat
          </div>
          <div
            style={{
              fontWeight: "800",
              color: "#0f172a",
              fontSize: "15px",
            }}
          ></div>
        </div>
      </div>

      {/* BODY */}
      <div
        style={{
          maxWidth: "1120px",
          margin: "34px auto",
          padding: "0 14px",
          display: "flex",
          gap: "22px",
          alignItems: "flex-start",
        }}
      >
        {/* FORM CARD */}
        <div
          style={{
            flex: 1,
            background: "#ffffff",
            padding: "20px", // ✅ 28 -> 20 (kart kısalır)
            borderRadius: "14px",
            boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            border: "1px solid #eef2f7",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <h2
              style={{
                margin: 0,
                color: "#0f172a",
                fontWeight: "900",
                fontSize: "20px", // ✅ 22 -> 20
              }}
            >
              Tamamlayıcı Sağlık Sigortası
            </h2>

            <span
              style={{
                fontSize: "12px",
                padding: "5px 9px", // ✅ biraz küçülttük
                borderRadius: "999px",
                background: "#eff6ff",
                color: "#1d4ed8",
                fontWeight: "700",
              }}
            >
              Hızlı Teklif
            </span>
          </div>

          <p
            style={{
              marginTop: "6px",     // ✅ 8 -> 6
              marginBottom: "12px", // ✅ 18 -> 12
              color: "#475569",
            }}
          >
            Bilgilerinizi girin, size en uygun teklifi hızlıca hazırlayalım.
          </p>

          {/* AD / SOYAD */}
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Ad</label>
              <input
                name="ad"
                value={form.ad}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Soyad</label>
              <input
                name="soyad"
                value={form.soyad}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          {/* TC */}
          <div>
            <label style={labelStyle}>TC Kimlik No</label>
            <input
              name="tc"
              value={form.tc}
              onChange={handleChange}
              placeholder="11 haneli"
              style={inputStyle}
              inputMode="numeric"
            />
          </div>

          {/* BOY / KILO */}
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Boy (cm)</label>
              <input
                name="boy"
                value={form.boy}
                onChange={handleChange}
                placeholder="Örn: 179"
                style={inputStyle}
                inputMode="numeric"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Kilo (kg)</label>
              <input
                name="kilo"
                value={form.kilo}
                onChange={handleChange}
                placeholder="Örn: 89"
                style={inputStyle}
                inputMode="numeric"
              />
            </div>
          </div>

          {/* TELEFON */}
          <div>
            <label style={labelStyle}>Telefon</label>
            <input
              name="telefon"
              value={form.telefon}
              onChange={handleChange}
              placeholder="Örn: 05xx xxx xx xx"
              style={inputStyle}
              inputMode="tel"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label style={labelStyle}>E-posta</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Örn: ornek@mail.com"
              style={inputStyle}
              inputMode="email"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={sendWhatsapp}
            style={{
              marginTop: "6px",
              width: "100%",
              background: "#0f172a",
              color: "#fff",
              padding: "12px 16px", // ✅ 14 -> 12 (kısalır)
              border: "none",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "800",
              cursor: "pointer",
              boxShadow: "0 10px 18px rgba(15,23,42,0.18)",
            }}
          >
            Hızlı Teklif Al
          </button>

          <div
            style={{
              marginTop: "8px", // ✅ 10 -> 8
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              color: "#64748b",
            }}
          ></div>

          <p
            style={{
              textAlign: "center",
              marginTop: "10px", // ✅ 14 -> 10
              fontSize: "12px",
              color: "#94a3b8",
            }}
          ></p>
        </div>

        {/* AVATAR CARD */}
        <div
          style={{
            width: "360px",
            background: "#ffffff",
            borderRadius: "14px",
            padding: "22px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
            border: "1px solid #eef2f7",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "900",
                color: "#0f172a",
              }}
            >
              Prof Sigorta Uzmanı
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#475569",
                marginTop: "6px",
              }}
            >
              Size en uygun poliçeyi hazırlayalım.
            </div>

            <div
              style={{
                marginTop: "12px",
                fontSize: "12px",
                color: "#64748b",
                lineHeight: 1.7,
              }}
            ></div>
          </div>

          <div
            style={{
              marginTop: "14px",
              background: "#f8fafc",
              border: "1px solid #eef2f7",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <img
              src="/avatar.png"
              alt="Uzman"
              style={{
                width: "230px",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

          <button
            onClick={() => window.open("https://wa.me/905301096161", "_blank")}
            style={{
              marginTop: "16px",
              width: "100%",
              background: "#22c55e",
              color: "#fff",
              padding: "12px 14px",
              border: "none",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            WhatsApp’tan Yaz
          </button>

          <div
            style={{ marginTop: "10px", fontSize: "12px", color: "#64748b" }}
          ></div>
        </div>
      </div>
    </div>
  );
}