"use client";

import { useEffect, useState } from "react";

export default function IsyeriSigortasiPage() {
  const [isMobile, setIsMobile] = useState(false);

  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    tcVkn: "",
    telefon: "",
    email: "",
    isyeriUnvani: "",
    vergiNo: "",
    faaliyetKonusu: "",
    il: "",
    ilce: "",
    adres: "",
    binaTipi: "",
    binaYapimYili: "",
    toplamAlan: "",
    katSayisi: "",
    demirbasTeminati: "",
    stokTeminati: "",
    camTeminati: "",
    hirsizlikTeminati: "",
    yanginHasarGecmisi: "",
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
    let newValue = value;

    if (name === "tcVkn") {
      newValue = value.replace(/\D/g, "").slice(0, 11);
    }

    if (name === "vergiNo") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "telefon") {
      newValue = value.replace(/[^\d\s()+-]/g, "").slice(0, 18);
    }

    if (name === "binaYapimYili") {
      newValue = value.replace(/\D/g, "").slice(0, 4);
    }

    if (name === "toplamAlan") {
      newValue = value.replace(/[^\d,.]/g, "").slice(0, 10);
    }

    if (name === "katSayisi") {
      newValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  }

  function handleSubmit() {
    const mesaj = `
İŞYERİ SİGORTASI TALEBİ

Ad: ${form.ad}
Soyad: ${form.soyad}
TC / VKN: ${form.tcVkn}
Telefon: ${form.telefon}
E-posta: ${form.email}

İşyeri Ünvanı: ${form.isyeriUnvani}
Vergi No: ${form.vergiNo}
Faaliyet Konusu: ${form.faaliyetKonusu}

İl: ${form.il}
İlçe: ${form.ilce}
Adres: ${form.adres}

Bina Tipi: ${form.binaTipi}
Bina Yapım Yılı: ${form.binaYapimYili}
Toplam Alan: ${form.toplamAlan}
Kat Sayısı: ${form.katSayisi}

Demirbaş Teminatı: ${form.demirbasTeminati}
Stok Teminatı: ${form.stokTeminati}
Cam Teminatı: ${form.camTeminati}
Hırsızlık Teminatı: ${form.hirsizlikTeminati}
Yangın / Hasar Geçmişi: ${form.yanginHasarGecmisi}

Ek Not: ${form.ekNot}

Kaynak: Web Form
    `.trim();

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
    gap: 12,
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

  const badgeStyle = {
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
    minHeight: 430,
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
          <div style={badgeTopStyle}>🏢 İşyeri teklif formu</div>

          <div style={titleRowStyle}>
            <h1 style={titleStyle}>İşyeri Sigortası</h1>
            <span style={badgeStyle}>Hızlı Teklif</span>
          </div>

          <p style={subtitleStyle}>
            Bilgilerinizi girin, işyeriniz için en uygun sigorta teklifini hazırlayalım.
          </p>

          <div style={gridStyle}>
            {renderInput("ad", "Ad", "Ad")}
            {renderInput("soyad", "Soyad", "Soyad")}
            {renderInput("tcVkn", "TC / Vergi No", "TCKN veya VKN", "text")}

            {renderInput("telefon", "Telefon", "05xx xxx xx xx", "tel")}
            {renderInput("email", "E-posta", "ornek@mail.com", "email")}
            {renderInput("isyeriUnvani", "İşyeri Ünvanı", "Firma adı")}

            {renderInput("vergiNo", "Vergi No", "10 haneli", "text")}
            {renderInput("faaliyetKonusu", "Faaliyet Konusu", "Örn. Kafe / Market / Ofis")}
            {renderInput("il", "İl", "Örn. Kayseri")}

            {renderInput("ilce", "İlçe", "Örn. Melikgazi")}
            {renderSelect("binaTipi", "Bina Tipi", ["", "Müstakil", "Apartman altı", "Plaza", "Diğer"])}
            {renderInput("binaYapimYili", "Bina Yapım Yılı", "Örn. 2018", "text")}

            <div style={isMobile ? { gridColumn: "auto" } : { gridColumn: "1 / -1" }}>
              {renderTextArea("adres", "Adres", "Mahalle / sokak / bina no")}
            </div>

            {renderInput("toplamAlan", "Toplam Alan (m²)", "Örn. 150", "text")}
            {renderInput("katSayisi", "Kat Sayısı", "Örn. 2", "text")}
            {renderInput("demirbasTeminati", "Demirbaş Teminatı", "Örn. 500.000 TL")}

            {renderInput("stokTeminati", "Stok Teminatı", "Örn. 300.000 TL")}
            {renderSelect("camTeminati", "Cam Teminatı", ["", "İsteniyor", "İstenmiyor"])}
            {renderSelect("hirsizlikTeminati", "Hırsızlık Teminatı", ["", "İsteniyor", "İstenmiyor"])}

            <div style={isMobile ? { gridColumn: "auto" } : { gridColumn: "1 / -1" }}>
              {renderTextArea(
                "yanginHasarGecmisi",
                "Yangın / Hasar Geçmişi",
                "Varsa kısa açıklama"
              )}
            </div>

            <div style={isMobile ? { gridColumn: "auto" } : { gridColumn: "1 / -1" }}>
              {renderTextArea("ekNot", "Ek Not", "Özel durum / ek bilgi")}
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