"use client";

import { useState } from "react";

export default function Page() {
  const WHATSAPP_NUMBER = "905301096161";
  const AVATAR_SRC = "/avatar.png"; // kendi mevcut avatar yolun farklıysa bunu değiştir

  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    tcKimlikNo: "",
    telefon: "",
    email: "",
    plaka: "",
    ruhsatSeriNo: "",
    aracMarka: "",
    aracModel: "",
    modelYili: "",
    hasarDurumu: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "plaka") {
      newValue = value.toUpperCase();
    }

    if (name === "telefon") {
      newValue = value.replace(/[^\d\s]/g, "");
    }

    if (name === "tcKimlikNo") {
      newValue = value.replace(/\D/g, "").slice(0, 11);
    }

    if (name === "modelYili") {
      newValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  }

  function buildWhatsAppMessage() {
    return `
Merhaba, profsigorta.com üzerinden Kasko Sigortası teklifi almak istiyorum.

Ad: ${form.ad}
Soyad: ${form.soyad}
TC Kimlik No: ${form.tcKimlikNo}
Telefon: ${form.telefon}
E-posta: ${form.email}
Plaka: ${form.plaka}
Ruhsat Seri No: ${form.ruhsatSeriNo}
Araç Marka: ${form.aracMarka}
Araç Model: ${form.aracModel}
Model Yılı: ${form.modelYili}
Hasar Durumu: ${form.hasarDurumu}
    `.trim();
  }

  function sendToWhatsApp() {
    const message = buildWhatsAppMessage();
    const url = https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)};
    window.open(url, "_blank");
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "#f5f7fb",
    padding: "28px 20px",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const wrapperStyle = {
    maxWidth: "1320px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    gap: "24px",
    alignItems: "start",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "24px",
    boxShadow: "0 10px 30px rgba(31, 41, 55, 0.08)",
    border: "1px solid rgba(15, 23, 42, 0.06)",
  };

  const leftCardStyle = {
    ...cardStyle,
    padding: "26px",
  };

  const rightCardStyle = {
    ...cardStyle,
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "760px",
  };

  const headingRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "6px",
    flexWrap: "wrap",
  };

  const titleStyle = {
    fontSize: "40px",
    lineHeight: 1.1,
    fontWeight: 800,
    color: "#243042",
    margin: 0,
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "#eef4ff",
    color: "#4f6bff",
    fontSize: "15px",
    fontWeight: 700,
  };

  const subTextStyle = {
    margin: "0 0 20px 0",
    color: "#7b8794",
    fontSize: "22px",
    fontWeight: 500,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px 18px",
  };

  const fullWidthStyle = {
    gridColumn: "1 / -1",
  };

  const labelStyle = {
    display: "block",
    fontSize: "24px",
    fontWeight: 700,
    color: "#4c596a",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "100%",
    height: "68px",
    borderRadius: "18px",
    border: "1px solid #e3e8ef",
    outline: "none",
    padding: "0 18px",
    fontSize: "24px",
    color: "#273444",
    background: "#fff",
    boxSizing: "border-box",
  };

  const hintStyle = {
    marginTop: "8px",
    color: "#98a2b3",
    fontSize: "18px",
  };

  const fileBoxStyle = {
    width: "100%",
    borderRadius: "18px",
    border: "1px solid #e3e8ef",
    padding: "14px 16px",
    background: "#fff",
    boxSizing: "border-box",
  };

  const darkButtonStyle = {
    width: "100%",
    height: "74px",
    border: "none",
    borderRadius: "18px",
    background: "linear-gradient(180deg, #525a69 0%, #3f4656 100%)",
    color: "#fff",
    fontSize: "28px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(63, 70, 86, 0.18)",
  };

  const greenButtonStyle = {
    width: "100%",
    height: "72px",
    border: "none",
    borderRadius: "18px",
    background: "linear-gradient(180deg, #8be36a 0%, #6dcc46 100%)",
    color: "#fff",
    fontSize: "24px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(109, 204, 70, 0.2)",
  };

  const sideTitleStyle = {
    margin: 0,
    fontSize: "22px",
    fontWeight: 800,
    color: "#5a6677",
  };

  const sideSubStyle = {
    margin: "4px 0 18px 0",
    fontSize: "18px",
    color: "#9aa4b2",
  };

  return (
    <div style={pageStyle}>
      <div style={wrapperStyle}>
        <div style={leftCardStyle}>
          <div style={headingRowStyle}>
            <h1 style={titleStyle}>Kasko Sigortası</h1>
            <span style={badgeStyle}>Hızlı Teklif</span>
          </div>

          <p style={subTextStyle}>
            Bilgilerinizi girin, size en uygun teklifi hızlıca hazırlayalım.
          </p>

          <div style={gridStyle}>
            <div>
              <label style={labelStyle}>Ad</label>
              <input
                style={inputStyle}
                name="ad"
                value={form.ad}
                onChange={handleChange}
                placeholder="Ad"
              />
            </div>

            <div>
              <label style={labelStyle}>Soyad</label>
              <input
                style={inputStyle}
                name="soyad"
                value={form.soyad}
                onChange={handleChange}
                placeholder="Soyad"
              />
            </div>

            <div style={fullWidthStyle}>
              <label style={labelStyle}>TC Kimlik No</label>
              <input
                style={inputStyle}
                name="tcKimlikNo"
                value={form.tcKimlikNo}
                onChange={handleChange}
                placeholder="11 haneli"
                inputMode="numeric"
              />
            </div>

            <div>
              <label style={labelStyle}>Telefon</label>
              <input
                style={inputStyle}
                name="telefon"
                value={form.telefon}
                onChange={handleChange}
                placeholder="05xx xxx xx xx"
                inputMode="tel"
              />
            </div>

            <div>
              <label style={labelStyle}>E-posta</label>
              <input
                style={inputStyle}
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ornek@mail.com"
                type="email"
              />
            </div>

            <div>
              <label style={labelStyle}>Plaka</label>
              <input
                style={inputStyle}
                name="plaka"
                value={form.plaka}
                onChange={handleChange}
                placeholder="00 ABC 123"
              />
            </div>

            <div>
              <label style={labelStyle}>Ruhsat Seri No</label>
              <input
                style={inputStyle}
                name="ruhsatSeriNo"
                value={form.ruhsatSeriNo}
                onChange={handleChange}
                placeholder="Ruhsat seri no"
              />
            </div>

            <div>
              <label style={labelStyle}>Araç Marka</label>
              <input
                style={inputStyle}
                name="aracMarka"
                value={form.aracMarka}
                onChange={handleChange}
                placeholder="Volkswagen"
              />
            </div>

            <div>
              <label style={labelStyle}>Araç Model</label>
              <input
                style={inputStyle}
                name="aracModel"
                value={form.aracModel}
                onChange={handleChange}
                placeholder="Passat"
              />
            </div>

            <div>
              <label style={labelStyle}>Model Yılı</label>
              <input
                style={inputStyle}
                name="modelYili"
                value={form.modelYili}
                onChange={handleChange}
                placeholder="2020"
                inputMode="numeric"
              />
            </div>

            <div>
              <label style={labelStyle}>Hasar Durumu</label>
              <input
                style={inputStyle}
                name="hasarDurumu"
                value={form.hasarDurumu}
                onChange={handleChange}
                placeholder="Var / Yok"
              />
            </div>

            <div style={fullWidthStyle}>
              <label style={labelStyle}>Araç Fotoğrafları (Opsiyonel)</label>
              <div style={fileBoxStyle}>
                <input type="file" multiple />
              </div>
              <div style={hintStyle}>
                Ön, arka, sağ ve sol fotoğraf yüklenebilir.
              </div>
            </div>
          </div>

          <div style={{ marginTop: "22px" }}>
            <button type="button" onClick={sendToWhatsApp} style={darkButtonStyle}>
              Hızlı Teklif Al
            </button>
          </div>
        </div>

        <div style={rightCardStyle}>
          <div>
            <h2 style={sideTitleStyle}>Prof Sigorta Uzmanı</h2>
            <p style={sideSubStyle}>Size en uygun poliçeyi hazırlayalım.</p>

            <div
              style={{
                width: "100%",
                minHeight: "560px",
                borderRadius: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "#f8fafc",
              }}
            >
              <img
                src={AVATAR_SRC}
                alt="Prof Sigorta Uzmanı"
                style={{
                  maxWidth: "90%",
                  maxHeight: "520px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <button type="button" onClick={sendToWhatsApp} style={greenButtonStyle}>
            WhatsApp'tan Yaz
          </button>
        </div>
      </div>
    </div>
  );
}