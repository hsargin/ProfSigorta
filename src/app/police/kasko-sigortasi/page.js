"use client";

import { useState } from "react";

export default function KaskoSigortasiPage() {
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
  });

  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const handleSubmit = () => {
    const fileNote =
      files.length > 0
        ? '\nFotoğraf Durumu: ${files.length} adet fotoğraf seçildi. Gerekirse ayrıca WhatsApp üzerinden iletilecek.'
        : '\nFotoğraf Durumu: Fotoğraf eklenmedi.;'

    const message = `Merhaba, Kasko Sigortası için teklif almak istiyorum.

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
Hasar Durumu: ${form.hasar}${fileNote}`;

    const whatsappUrl = `https://wa.me/905301096161?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const openWhatsappDirect = () => {
    window.open("https://wa.me/905301096161", "_blank");
  };

  const pageStyle = {
    minHeight: "100vh",
    background: "#f6f8fb",
    boxSizing: "border-box",
  };

  const headerStyle = {
    width: "100%",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
  };

  const headerLogoStyle = {
    height: "50px",
    width: "auto",
    objectFit: "contain",
    display: "block",
  };

  const headerTextStyle = {
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: 600,
  };

  const contentAreaStyle = {
    padding: "18px 16px 18px",
    boxSizing: "border-box",
  };

  const wrapperStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "2.15fr 0.85fr",
    gap: "16px",
    alignItems: "stretch",
  };

  const leftCardStyle = {
    background: "#ffffff",
    border: "1px solid #e8edf3",
    borderRadius: "20px",
    padding: "16px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
    boxSizing: "border-box",
  };

  const rightCardStyle = {
    background: "#ffffff",
    border: "1px solid #e8edf3",
    borderRadius: "20px",
    padding: "16px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxSizing: "border-box",
  };

  const titleRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "2px",
  };

  const formTitleStyle = {
    margin: 0,
    fontSize: "19px",
    fontWeight: 800,
    color: "#1f2937",
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "3px 9px",
    borderRadius: "999px",
    background: "#eef6ff",
    color: "#2573ff",
    fontSize: "12px",
    fontWeight: 700,
  };

  const formDescStyle = {
    margin: "0 0 10px 0",
    fontSize: "13px",
    color: "#6b7280",
  };

  const twoColStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "10px",
  };

  const oneColStyle = {
    marginBottom: "10px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "4px",
    fontSize: "13px",
    fontWeight: 700,
    color: "#374151",
  };

  const inputStyle = {
    width: "100%",
    height: "42px",
    borderRadius: "12px",
    border: "1px solid #d6dee8",
    background: "#ffffff",
    color: "#111827",
    fontSize: "14px",
    padding: "0 12px",
    outline: "none",
    boxSizing: "border-box",
    boxShadow: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
  };

  const fileInputStyle = {
    width: "100%",
    borderRadius: "12px",
    border: "1px solid #d6dee8",
    background: "#ffffff",
    color: "#111827",
    fontSize: "13px",
    padding: "8px 10px",
    outline: "none",
    boxSizing: "border-box",
    boxShadow: "none",
  };

  const noteStyle = {
    margin: "6px 0 0 0",
    fontSize: "11px",
    lineHeight: 1.35,
    color: "#6b7280",
  };

  const fileListStyle = {
    marginTop: "6px",
    padding: "8px 10px",
    borderRadius: "10px",
    background: "#f8fafc",
    border: "1px solid #e7edf5",
    fontSize: "12px",
    color: "#374151",
  };

  const submitButtonStyle = {
    width: "100%",
    height: "46px",
    marginTop: "6px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(90deg, #101828 0%, #15294b 100%)",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 800,
    cursor: "pointer",
  };

  const expertTitleStyle = {
    margin: 0,
    fontSize: "16px",
    fontWeight: 800,
    color: "#1f2937",
  };

  const expertDescStyle = {
    margin: "4px 0 10px 0",
    fontSize: "13px",
    color: "#6b7280",
  };

  const rightTopStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  const avatarBoxStyle = {
    background: "#f8fafc",
    border: "1px solid #edf2f7",
    borderRadius: "18px",
    flex: 1,
    minHeight: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px",
    overflow: "hidden",
  };

  const avatarStyle = {
    width: "100%",
    maxWidth: "255px",
    maxHeight: "390px",
    height: "auto",
    objectFit: "contain",
    display: "block",
  };

  const whatsappButtonStyle = {
    width: "100%",
    height: "46px",
    marginTop: "12px",
    border: "none",
    borderRadius: "14px",
    background: "#57c84d",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 800,
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <img
          src="/logo.png"
          alt="Prof Sigorta"
          style={headerLogoStyle}
        />

        <span style={headerTextStyle}>Doğru Teklif , Doğru Fiyat</span>
      </div>

      <div style={contentAreaStyle}>
        <div style={wrapperStyle}>
          <div style={gridStyle}>
            <div style={leftCardStyle}>
              <div style={titleRowStyle}>
                <h2 style={formTitleStyle}>Kasko Sigortası</h2>
                <span style={badgeStyle}>Hızlı Teklif</span>
              </div>

              <p style={formDescStyle}>
                Bilgilerinizi girin, size en uygun teklifi hızlıca hazırlayalım.
              </p>

              <div style={twoColStyle}>
                <div>
                  <label style={labelStyle}>Ad</label>
                  <input
                    type="text"
                    name="ad"
                    value={form.ad}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Ad"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Soyad</label>
                  <input
                    type="text"
                    name="soyad"
                    value={form.soyad}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Soyad"
                  />
                </div>
              </div>

              <div style={oneColStyle}>
                <label style={labelStyle}>TC Kimlik No</label>
                <input
                  type="text"
                  name="tc"
                  value={form.tc}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="11 haneli"
                  maxLength={11}
                />
              </div>

              <div style={twoColStyle}>
                <div>
                  <label style={labelStyle}>Telefon</label>
                  <input
                    type="text"
                    name="telefon"
                    value={form.telefon}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="05xx xxx xx xx"
                  />
                </div>

                <div>
                  <label style={labelStyle}>E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="ornek@mail.com"
                  />
                </div>
              </div>

              <div style={twoColStyle}>
                <div>
                  <label style={labelStyle}>Plaka</label>
                  <input
                    type="text"
                    name="plaka"
                    value={form.plaka}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="00 ABC 123"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Ruhsat Seri No</label>
                  <input
                    type="text"
                    name="ruhsat"
                    value={form.ruhsat}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Ruhsat seri no"
                  />
                </div>
              </div>

              <div style={twoColStyle}>
                <div>
                  <label style={labelStyle}>Araç Marka</label>
                  <input
                    type="text"
                    name="marka"
                    value={form.marka}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Volkswagen"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Araç Model</label>
                  <input
                    type="text"
                    name="model"
                    value={form.model}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Passat"
                  />
                </div>
              </div>

              <div style={twoColStyle}>
                <div>
                  <label style={labelStyle}>Model Yılı</label>
                  <input
                    type="text"
                    name="yil"
                    value={form.yil}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="2020"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Hasar Durumu</label>
                  <input
                    type="text"
                    name="hasar"
                    value={form.hasar}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Var / Yok"
                  />
                </div>
              </div>

              <div style={oneColStyle}>
                <label style={labelStyle}>Araç Fotoğrafları (Opsiyonel)</label>
                <input
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
                    <div style={{ marginTop: "4px" }}>
                      {files.map((file, index) => (
                        <div key={'${file.name}-${index}'}>
                          {index + 1}. {file.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                style={submitButtonStyle}
              >
                Hızlı Teklif Al
              </button>
            </div>

            <div style={rightCardStyle}>
              <div style={rightTopStyle}>
                <h3 style={expertTitleStyle}>Prof Sigorta Uzmanı</h3>
                <p style={expertDescStyle}>
                  Size en uygun poliçeyi hazırlayalım.
                </p>

                <div style={avatarBoxStyle}>
                  <img
                    src="/avatar.png"
                    alt="Prof Sigorta Uzmanı"
                    style={avatarStyle}
                  />
                </div>
              </div>

              <button
                type="button"
                style={whatsappButtonStyle}
                onClick={openWhatsappDirect}
              >
                WhatsApp’tan Yaz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}