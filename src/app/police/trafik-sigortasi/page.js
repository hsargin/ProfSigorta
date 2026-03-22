"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    tc: "",
    ruhsatNo: "",
    plaka: "",
    ruhsatSahibi: "",
    aracModel: "",
    modelYili: "",
    telefon: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "plaka") {
      setForm((p) => ({ ...p, plaka: value.toUpperCase() }));
      return;
    }

    if (name === "ruhsatNo") {
      const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
      setForm((p) => ({ ...p, ruhsatNo: cleaned }));
      return;
    }

    if (name === "tc") {
      const cleaned = value.replace(/\D/g, "").slice(0, 11);
      setForm((p) => ({ ...p, tc: cleaned }));
      return;
    }

    if (name === "telefon") {
      const cleaned = value.replace(/[^\d\s]/g, "").slice(0, 15);
      setForm((p) => ({ ...p, telefon: cleaned }));
      return;
    }

    if (name === "modelYili") {
      const cleaned = value.replace(/\D/g, "").slice(0, 4);
      setForm((p) => ({ ...p, modelYili: cleaned }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  }

  function sendWhatsapp() {
    const mesaj = `Trafik Sigortası Teklif Talebi

Ad: ${form.ad}
Soyad: ${form.soyad}
TC: ${form.tc}

Ruhsat Seri No: ${form.ruhsatNo}
Araç Plakası: ${form.plaka}
Ruhsat Sahibi (Ad Soyad): ${form.ruhsatSahibi}
Araç Modeli: ${form.aracModel}
Model Yılı: ${form.modelYili}

Telefon: ${form.telefon}
E-posta: ${form.email}

Kaynak: Web Form`;

    const url = "https://wa.me/905301096161?text=" + encodeURIComponent(mesaj);
    window.open(url, "_blank");
  }

  const inputStyle = {
    width: "100%",
    height: "40px",
    padding: "0 12px",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    marginBottom: "8px",
    background: "#ffffff",
    color: "#0f172a",
    outline: "none",
    fontSize: "13px",
    boxShadow: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    boxSizing: "border-box",
    transition: "all 0.15s ease",
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: "700",
    color: "#334155",
    marginBottom: "4px",
    display: "block",
  };

  const headerStyle = {
    background: "#ffffff",
    borderBottom: "1px solid #e9edf3",
    padding: "10px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "16px",
    borderRadius: "16px",
    boxShadow: "0 12px 40px rgba(15,23,42,0.08)",
    border: "1px solid #eef2f7",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        background: "#f4f6f9",
        minHeight: "100vh",
        fontFamily:
          'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
      }}
    >
      <div style={headerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="Prof Sigorta"
            style={{ height: "56px", width: "auto", display: "block" }}
          />
        </div>

        <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
          Doğru Teklif , Doğru Fiyat
        </div>
      </div>

      <div
        style={{
          maxWidth: "1320px",
          margin: "18px auto",
          padding: "0 14px 18px",
          display: "flex",
          gap: "18px",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            ...cardStyle,
            flex: 1,
          }}
        >
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <h2
              style={{
                margin: 0,
                color: "#0f172a",
                fontWeight: "900",
                fontSize: "18px",
              }}
            >
              Trafik Sigortası
            </h2>

            <span
              style={{
                fontSize: "11px",
                padding: "4px 8px",
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
              marginTop: "4px",
              marginBottom: "10px",
              color: "#475569",
              fontSize: "13px",
            }}
          >
            Bilgilerinizi girin, size en uygun teklifi hızlıca hazırlayalım.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Ad</label>
              <input
                name="ad"
                value={form.ad}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
                onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Soyad</label>
              <input
                name="soyad"
                value={form.soyad}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
                onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>TC Kimlik No</label>
            <input
              name="tc"
              value={form.tc}
              onChange={handleChange}
              placeholder="11 haneli"
              style={inputStyle}
              inputMode="numeric"
              onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </div>

          <div>
            <label style={labelStyle}>Ruhsat Seri No (Harf + Sayı)</label>
            <input
              name="ruhsatNo"
              value={form.ruhsatNo}
              onChange={handleChange}
              placeholder="Örn: AB123456"
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </div>

          <div>
            <label style={labelStyle}>Araç Plakası</label>
            <input
              name="plaka"
              value={form.plaka}
              onChange={handleChange}
              placeholder="Örn: 34 ABC 123"
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </div>

          <div>
            <label style={labelStyle}>Ruhsat Sahibi (Ad Soyad)</label>
            <input
              name="ruhsatSahibi"
              value={form.ruhsatSahibi}
              onChange={handleChange}
              placeholder="Örn: Araç sahibinin adı"
              style={inputStyle}
              onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
              onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
            />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Araç Modeli</label>
              <input
                name="aracModel"
                value={form.aracModel}
                onChange={handleChange}
                placeholder="Örn: Toyota Corolla 1.2T Dream"
                style={inputStyle}
                onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
                onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Model Yılı</label>
              <input
                name="modelYili"
                value={form.modelYili}
                onChange={handleChange}
                placeholder="Örn: 2020"
                style={inputStyle}
                inputMode="numeric"
                onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
                onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Telefon</label>
              <input
                name="telefon"
                value={form.telefon}
                onChange={handleChange}
                placeholder="Örn: 05xx xxx xx xx"
                style={inputStyle}
                inputMode="tel"
                onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
                onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label style={labelStyle}>E-posta</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Örn: ornek@mail.com"
                style={inputStyle}
                inputMode="email"
                onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
                onBlur={(e) => (e.target.style.border = "1px solid #e2e8f0")}
              />
            </div>
          </div>

          <button
            onClick={sendWhatsapp}
            style={{
              marginTop: "4px",
              width: "100%",
              background: "#0f172a",
              color: "#fff",
              height: "44px",
              border: "none",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "800",
              cursor: "pointer",
              boxShadow: "0 10px 18px rgba(15,23,42,0.18)",
            }}
          >
            Hızlı Teklif Al
          </button>
        </div>

        <div
          style={{
            ...cardStyle,
            width: "340px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{ fontSize: "16px", fontWeight: "900", color: "#0f172a" }}
            >
              Prof Sigorta Uzmanı
            </div>
            <div style={{ fontSize: "13px", color: "#475569", marginTop: "4px" }}>
              Size en uygun poliçeyi hazırlayalım.
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <div
              style={{
                width: "100%",
                background: "#f9fafb",
                border: "1px solid #eef2f7",
                borderRadius: "14px",
                padding: "10px",
              }}
            >
              <img
                src="/avatar.png"
                alt="Uzman"
                style={{
                  width: "250px",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>

          <button
            onClick={() => window.open("https://wa.me/905301096161", "_blank")}
            style={{
              marginTop: "12px",
              width: "100%",
              background: "#22c55e",
              color: "#fff",
              height: "44px",
              border: "none",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            WhatsApp’tan Yaz
          </button>
        </div>
      </div>
    </div>
  );
}