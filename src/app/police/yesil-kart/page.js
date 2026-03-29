"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    tcVkn: "",
    telefon: "",
    email: "",
    plaka: "",
    ruhsatNo: "",
    ruhsatSahibi: "",
    aracTipi: "",
    aracMarkaModel: "",
    saseNo: "",
    gidilecekUlkeler: "",
    baslangicTarihi: "",
    bitisTarihi: "",
    trafikPoliceVarMi: "",
    trafikPoliceBitis: "",
    sirketAraciMi: "",
    vergiNo: "",
    sirketUnvani: "",
    teslimAdresi: "",
    ekNot: "",
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

    if (name === "tcVkn") {
      const cleaned = value.replace(/\D/g, "").slice(0, 11);
      setForm((p) => ({ ...p, tcVkn: cleaned }));
      return;
    }

    if (name === "telefon") {
      const cleaned = value.replace(/[^\d\s()+-]/g, "").slice(0, 18);
      setForm((p) => ({ ...p, telefon: cleaned }));
      return;
    }

    if (name === "vergiNo") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setForm((p) => ({ ...p, vergiNo: cleaned }));
      return;
    }

    if (name === "saseNo") {
      const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 17);
      setForm((p) => ({ ...p, saseNo: cleaned }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  }

  function sendWhatsapp() {
    const mesaj = `YEŞİL KART SİGORTASI TEKLİF TALEBİ

Ad: ${form.ad}
Soyad: ${form.soyad}
TC / VKN: ${form.tcVkn}
Telefon: ${form.telefon}
E-posta: ${form.email}

Plaka: ${form.plaka}
Ruhsat Seri No: ${form.ruhsatNo}
Ruhsat Sahibi: ${form.ruhsatSahibi}
Araç Tipi: ${form.aracTipi}
Araç Marka / Model: ${form.aracMarkaModel}
Şase No: ${form.saseNo}

Gidilecek Ülkeler: ${form.gidilecekUlkeler}
Başlangıç Tarihi: ${form.baslangicTarihi}
Bitiş Tarihi: ${form.bitisTarihi}

Geçerli Trafik Poliçesi Var mı?: ${form.trafikPoliceVarMi}
Trafik Poliçesi Bitiş: ${form.trafikPoliceVarMi === "Evet" ? form.trafikPoliceBitis : "-"}

Şirket Aracı mı?: ${form.sirketAraciMi}
Vergi No: ${form.sirketAraciMi === "Evet" ? form.vergiNo : "-"}
Şirket Ünvanı: ${form.sirketAraciMi === "Evet" ? form.sirketUnvani : "-"}

Teslim Adresi: ${form.teslimAdresi}
Ek Not: ${form.ekNot}

Kaynak: Web Form`;

    const url = `https://wa.me/905301096161?text=${encodeURIComponent(mesaj)}`;
    window.open(url, "_blank");
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: isMobile ? "10px 10px 18px" : "18px 18px 28px",
    fontFamily: "Inter, Arial, sans-serif",
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
    minHeight: 700,
    display: isMobile ? "none" : "flex",
    flexDirection: "column",
  };

  const badgeTopStyle = {
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
        name={name}
        type={type}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );

  const renderSelect = (name, label, options) => (
    <div style={fieldWrapStyle}>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        style={inputStyle}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );

  const renderTextArea = (name, label, placeholder) => (
    <div style={fieldWrapStyle}>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        style={textAreaStyle}
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
          <div style={badgeTopStyle}>🌍 Yeşil Kart teklif formu</div>

          <div style={titleRowStyle}>
            <h1 style={titleStyle}>Yeşil Kart Sigortası</h1>
            <span style={miniBadgeStyle}>Hızlı Teklif</span>
          </div>

          <p style={subtitleStyle}>
            Bilgilerinizi girin, Yeşil Kart sigortası için en uygun teklifi hazırlayalım.
          </p>

          <div style={gridStyle}>
            {renderInput("ad", "Ad", "Ad")}
            {renderInput("soyad", "Soyad", "Soyad")}
            {renderInput("tcVkn", "TC / Vergi No", "TCKN veya VKN", "text")}

            {renderInput("telefon", "Telefon", "05xx xxx xx xx", "tel")}
            {renderInput("email", "E-posta", "ornek@mail.com", "email")}
            {renderInput("plaka", "Plaka", "34 ABC 123")}

            {renderInput("ruhsatNo", "Ruhsat Seri No", "AB123456")}
            {renderInput("ruhsatSahibi", "Ruhsat Sahibi", "Ad Soyad / Firma Ünvanı")}
            {renderSelect("aracTipi", "Araç Tipi", [
              "",
              "Otomobil",
              "Motosiklet",
              "Kamyonet",
              "Minibüs",
              "Otobüs",
              "Çekici",
              "Karavan",
              "Römork",
              "Diğer",
            ])}

            {renderInput("aracMarkaModel", "Araç Marka / Model", "Volkswagen Passat")}
            {renderInput("saseNo", "Şase No", "17 karaktere kadar")}
            {renderInput("gidilecekUlkeler", "Gidilecek Ülkeler", "Bulgaristan, Sırbistan...")}

            {renderInput("baslangicTarihi", "Başlangıç", "", "date")}
            {renderInput("bitisTarihi", "Bitiş", "", "date")}
            {renderSelect("trafikPoliceVarMi", "Geçerli Trafik Poliçesi Var mı?", ["", "Evet", "Hayır"])}

            {renderInput("trafikPoliceBitis", "Trafik Poliçesi Bitiş", "", "date")}
            {renderSelect("sirketAraciMi", "Şirket Aracı mı?", ["", "Hayır", "Evet"])}
            {renderInput("vergiNo", "Vergi No", "10 haneli", "text")}

            {renderInput("sirketUnvani", "Şirket Ünvanı", "Firma adı")}

            <div style={isMobile ? { gridColumn: "auto" } : { gridColumn: "2 / -1" }}>
              {renderTextArea("teslimAdresi", "Teslim Adresi", "Teslim adresi")}
            </div>

            <div style={isMobile ? { gridColumn: "auto" } : { gridColumn: "1 / -1" }}>
              {renderTextArea("ekNot", "Ek Not", "Özel durum / acil tarih")}
            </div>
          </div>

          <button type="button" onClick={sendWhatsapp} style={buttonStyle}>
            Hızlı Teklif Al
          </button>
        </div>

        <div style={rightCardStyle}>
          <h2 style={sideTitleStyle}>Prof Sigorta Uzmanı</h2>
          <p style={sideTextStyle}>Size en uygun poliçeyi hazırlayalım.</p>

          <div style={avatarBoxStyle}>
            <img
              src="/avatar.png"
              alt="Uzman"
              style={{
                maxWidth: "100%",
                maxHeight: 360,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => window.open("https://wa.me/905301096161", "_blank")}
            style={whatsappButtonStyle}
          >
            WhatsApp&apos;tan Yaz
          </button>
        </div>
      </div>
    </div>
  );
}