"use client";

import { useEffect, useState } from "react";

export default function KaskoSigortasiPage() {
  const [isMobile, setIsMobile] = useState(false);

  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    tc: "",
    telefon: "",
    email: "",
    plaka: "",
    ruhsat: "",
    marka: "",
    model: "",
    yil: "",
    hasar: "",
    ekNot: "",
  });

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "plaka") {
      newValue = value.toUpperCase();
    }

    if (name === "ruhsat") {
      newValue = value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    }

    if (name === "tc") {
      newValue = value.replace(/\D/g, "").slice(0, 11);
    }

    if (name === "telefon") {
      newValue = value.replace(/[^\d\s()+-]/g, "").slice(0, 18);
    }

    if (name === "yil") {
      newValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  }

  function handleFileChange(e) {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  }

  function handleSubmit() {
    const fileNote =
      files.length > 0
        ? `Fotoğraf Durumu: ${files.length} adet fotoğraf seçildi. Gerekirse ayrıca WhatsApp üzerinden iletilecek.`
        : "Fotoğraf Durumu: Fotoğraf eklenmedi.";

    const message = `KASKO SİGORTASI TEKLİF TALEBİ

Ad: ${form.ad}
Soyad: ${form.soyad}
TC Kimlik No: ${form.tc}
Telefon: ${form.telefon}
E-posta: ${form.email}

Plaka: ${form.plaka}
Ruhsat Seri No: ${form.ruhsat}
Araç Marka: ${form.marka}
Araç Model: ${form.model}
Model Yılı: ${form.yil}
Hasar Durumu: ${form.hasar}

Ek Not: ${form.ekNot}

${fileNote}

Kaynak: Web Form`;

    const whatsappUrl = `https://wa.me/905301096161?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  function openWhatsappDirect() {
    window.open("https://wa.me/905301096161", "_blank");
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: isMobile ? "10px 10px 18px" : "18px 18px 28px",
    fontFamily: "Inter, Arial, sans-serif",
    boxSizing: "border-box",
  };

  const topBarStyle = {
    width: "100%",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: isMobile ? "10px 12px" : "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    marginBottom: isMobile ? 10 : 16,
    borderRadius: isMobile ? 14 : 0,
  };

  const outerWrapStyle = {
    maxWidth: 1560,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "minmax(0, 1fr) 340px",
    gap: isMobile ? 0 : 18,
    alignItems: "start",
  };

  const leftCardStyle = {
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: isMobile ? 18 : 24,
    padding: isMobile ? "14px 12px 14px" : "18px 16px 14px",
    boxSizing: "border-box",
    width: "100%",
    overflow: "hidden",
  };

  const rightCardStyle = {
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 24,
    padding: "18px 16px 14px",
    boxSizing: "border-box",
    minHeight: 690,
    display: isMobile ? "none" : "flex",
    flexDirection: "column",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: isMobile ? 28 : 32,
    padding: isMobile ? "6px 12px" : "0 14px",
    borderRadius: 999,
    background: "#fff7ed",
    color: "#c2410c",
    border: "1px solid #fed7aa",
    fontWeight: 800,
    fontSize: isMobile ? 12 : 14,
    marginBottom: 10,
    lineHeight: 1.2,
    flexWrap: "wrap",
  };

  const titleRowStyle = {
    display: "flex",
    alignItems: isMobile ? "flex-start" : "center",
    gap: 10,
    marginBottom: 6,
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row",
  };

  const titleStyle = {
    margin: 0,
    fontSize: isMobile ? 18 : 24,
    lineHeight: isMobile ? "24px" : "30px",
    fontWeight: 800,
    color: "#0f172a",
    letterSpacing: "-0.02em",
  };

  const miniBadgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: isMobile ? 28 : 30,
    padding: "0 14px",
    borderRadius: 999,
    background: "#e8f0ff",
    color: "#2563eb",
    fontWeight: 800,
    fontSize: isMobile ? 12 : 14,
  };

  const subtitleStyle = {
    margin: "0 0 14px 0",
    color: "#475569",
    fontSize: isMobile ? 14 : 15,
    lineHeight: isMobile ? "20px" : "22px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
    gap: isMobile ? "10px" : "10px 12px",
  };

  const fieldWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    minWidth: 0,
  };

  const labelStyle = {
    fontSize: isMobile ? 13 : 14,
    fontWeight: 800,
    color: "#0f172a",
    lineHeight: "18px",
    margin: 0,
  };

  const inputStyle = {
    width: "100%",
    height: isMobile ? 46 : 44,
    borderRadius: 12,
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#0f172a",
    padding: "0 14px",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    boxShadow: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
  };

  const fileInputStyle = {
    width: "100%",
    borderRadius: 12,
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#0f172a",
    fontSize: 14,
    padding: "10px 12px",
    outline: "none",
    boxSizing: "border-box",
    boxShadow: "none",
  };

  const textAreaStyle = {
    width: "100%",
    minHeight: isMobile ? 96 : 100,
    borderRadius: 12,
    border: "1px solid #cbd5e1",
    background: "#ffffff",
    color: "#0f172a",
    padding: "12px 14px",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    boxShadow: "none",
    resize: "vertical",
    fontFamily: "Inter, Arial, sans-serif",
  };

  const noteStyle = {
    margin: "6px 0 0 0",
    fontSize: 12,
    lineHeight: 1.45,
    color: "#64748b",
  };

  const fileListStyle = {
    marginTop: 8,
    padding: "10px 12px",
    borderRadius: 12,
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    fontSize: 12,
    color: "#334155",
  };

  const buttonStyle = {
    width: "100%",
    height: isMobile ? 50 : 48,
    marginTop: 16,
    border: "none",
    borderRadius: 14,
    background: "linear-gradient(90deg, #0b1533 0%, #08122b 100%)",
    color: "#ffffff",
    fontSize: isMobile ? 16 : 18,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 3px 0 rgba(0,0,0,0.12)",
  };

  const sideTitleStyle = {
    margin: 0,
    fontSize: 20,
    lineHeight: "26px",
    fontWeight: 800,
    color: "#0f172a",
  };

  const sideTextStyle = {
    margin: "6px 0 14px 0",
    fontSize: 15,
    lineHeight: "22px",
    color: "#475569",
  };

  const avatarBoxStyle = {
    flex: 1,
    borderRadius: 18,
    background: "#f3f4f6",
    border: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    minHeight: 400,
    overflow: "hidden",
  };

  const avatarStyle = {
    maxWidth: "100%",
    maxHeight: 360,
    objectFit: "contain",
    display: "block",
  };

  const whatsappButtonStyle = {
    width: "100%",
    height: 48,
    marginTop: 16,
    border: "none",
    borderRadius: 14,
    background: "#22c55e",
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 3px 0 rgba(0,0,0,0.10)",
  };

  const renderInput = (name, label, placeholder, type = "text") => (
    <div style={fieldWrapStyle}>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        style={inputStyle}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
        <div>
          <img
            src="/logo.png"
            alt="Prof Sigorta"
            style={{
              height: isMobile ? 34 : 44,
              width: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        {!isMobile && (
          <div
            style={{
              color: "#64748b",
              fontSize: 14,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Doğru Teklif , Doğru Fiyat
          </div>
        )}
      </div>

      <div style={outerWrapStyle}>
        <div style={leftCardStyle}>
          <div style={badgeStyle}>🚙 Araç kasko teklif formu</div>

          <div style={titleRowStyle}>
            <h1 style={titleStyle}>Kasko Sigortası</h1>
            <span style={miniBadgeStyle}>Hızlı Teklif</span>
          </div>

          <p style={subtitleStyle}>
            Bilgilerinizi girin, size en uygun kasko teklifini hızlıca hazırlayalım.
          </p>

          <div style={gridStyle}>
            {renderInput("ad", "Ad", "Ad")}
            {renderInput("soyad", "Soyad", "Soyad")}
            {renderInput("tc", "TC Kimlik No", "11 haneli", "text")}

            {renderInput("telefon", "Telefon", "05xx xxx xx xx", "tel")}
            {renderInput("email", "E-posta", "ornek@mail.com", "email")}
            {renderInput("plaka", "Plaka", "34 ABC 123")}

            {renderInput("ruhsat", "Ruhsat Seri No", "Ruhsat seri no")}
            {renderInput("marka", "Araç Marka", "Volkswagen")}
            {renderInput("model", "Araç Model", "Passat")}

            {renderInput("yil", "Model Yılı", "2020", "text")}
            {renderInput("hasar", "Hasar Durumu", "Var / Yok")}

            <div style={fieldWrapStyle}>
              <label htmlFor="fileUpload" style={labelStyle}>
                Araç Fotoğrafları (Opsiyonel)
              </label>
              <input
                id="fileUpload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                style={fileInputStyle}
              />
              <p style={noteStyle}>
                Ön, arka, sağ ve sol fotoğraf yüklenebilir.
              </p>

              {files.length > 0 && (
                <div style={fileListStyle}>
                  <strong>Seçilenler:</strong>
                  <div style={{ marginTop: 4 }}>
                    {files.map((file, index) => (
                      <div key={`${file.name}-${index}`}>
                        {index + 1}. {file.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={isMobile ? { gridColumn: "auto" } : { gridColumn: "1 / -1" }}>
              <div style={fieldWrapStyle}>
                <label htmlFor="ekNot" style={labelStyle}>
                  Ek Not
                </label>
                <textarea
                  id="ekNot"
                  name="ekNot"
                  value={form.ekNot}
                  onChange={handleChange}
                  placeholder="Özel durum / ek bilgi"
                  style={textAreaStyle}
                />
              </div>
            </div>
          </div>

          <button type="button" onClick={handleSubmit} style={buttonStyle}>
            Hızlı Teklif Al
          </button>
        </div>

        <div style={rightCardStyle}>
          <h2 style={sideTitleStyle}>Prof Sigorta Uzmanı</h2>
          <p style={sideTextStyle}>Size en uygun poliçeyi hazırlayalım.</p>

          <div style={avatarBoxStyle}>
            <img
              src="/avatar.png"
              alt="Prof Sigorta Uzmanı"
              style={avatarStyle}
            />
          </div>

          <button
            type="button"
            style={whatsappButtonStyle}
            onClick={openWhatsappDirect}
          >
            WhatsApp&apos;tan Yaz
          </button>
        </div>
      </div>
    </div>
  );
}