"use client";

import { useState } from "react";

export default function OzelSaglikSigortasiPage() {
  const [form, setForm] = useState({
    ad: "",
    soyad: "",
    tcKimlikNo: "",
    telefon: "",
    email: "",
    dogumTarihi: "",
    cinsiyet: "",
    meslek: "",
    boy: "",
    kilo: "",
    sigaraKullanim: "",
    medeniDurum: "",
    il: "",
    ilce: "",
    aileDahilMi: "",
    mevcutSigortaVarMi: "",
    mevcutSigortaSirketi: "",
    teminatTercihi: "",
    yatarakTedavi: "",
    ayaktaTedavi: "",
    dogumTeminati: "",
    kronikRahatsizlik: "",
    gecmisAmeliyat: "",
    ekNot: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    const mesaj = `
ÖZEL SAĞLIK SİGORTASI TALEBİ

Ad: ${form.ad}
Soyad: ${form.soyad}
TC Kimlik No: ${form.tcKimlikNo}
Telefon: ${form.telefon}
E-posta: ${form.email}

Doğum Tarihi: ${form.dogumTarihi}
Cinsiyet: ${form.cinsiyet}
Meslek: ${form.meslek}
Boy: ${form.boy}
Kilo: ${form.kilo}
Sigara Kullanımı: ${form.sigaraKullanim}
Medeni Durum: ${form.medeniDurum}

İl: ${form.il}
İlçe: ${form.ilce}
Aile Dahil mi?: ${form.aileDahilMi}

Mevcut Sağlık Sigortası Var mı?: ${form.mevcutSigortaVarMi}
Mevcut Sigorta Şirketi: ${form.mevcutSigortaSirketi}
Teminat Tercihi: ${form.teminatTercihi}
Yatarak Tedavi: ${form.yatarakTedavi}
Ayakta Tedavi: ${form.ayaktaTedavi}
Doğum Teminatı: ${form.dogumTeminati}

Kronik Rahatsızlık: ${form.kronikRahatsizlik}
Geçmiş Ameliyat / Tedavi: ${form.gecmisAmeliyat}

Ek Not: ${form.ekNot}
    `.trim();

    const url = `https://wa.me/905301096161?text=${encodeURIComponent(mesaj)}`;
    window.open(url, "_blank");
  }

  const pageStyle = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "18px 18px 28px",
    fontFamily: "Inter, Arial, sans-serif",
  };

  const topBarStyle = {
    width: "100%",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    marginBottom: 16,
  };

  const logoWrapStyle = {
    display: "flex",
    alignItems: "center",
    gap: 10,
  };

  const outerWrapStyle = {
    maxWidth: 1560,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 340px",
    gap: 18,
    alignItems: "start",
  };

  const leftCardStyle = {
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 24,
    padding: "18px 16px 14px",
    boxSizing: "border-box",
    minHeight: 760,
  };

  const rightCardStyle = {
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 24,
    padding: "18px 16px 14px",
    boxSizing: "border-box",
    minHeight: 760,
    display: "flex",
    flexDirection: "column",
  };

  const titleRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 6,
    flexWrap: "wrap",
  };

  const titleStyle = {
    margin: 0,
    fontSize: 24,
    lineHeight: "30px",
    fontWeight: 800,
    color: "#0f172a",
    letterSpacing: "-0.02em",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    padding: "0 14px",
    borderRadius: 999,
    background: "#e8f0ff",
    color: "#2563eb",
    fontWeight: 800,
    fontSize: 14,
  };

  const subtitleStyle = {
    margin: "0 0 14px 0",
    color: "#475569",
    fontSize: 15,
    lineHeight: "22px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px 12px",
  };

  const fieldWrapStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  };

  const labelStyle = {
    fontSize: 14,
    fontWeight: 800,
    color: "#0f172a",
    lineHeight: "18px",
    margin: 0,
  };

  const inputStyle = {
    width: "100%",
    height: 44,
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

  const buttonStyle = {
    width: "100%",
    height: 48,
    marginTop: 16,
    border: "none",
    borderRadius: 14,
    background: "linear-gradient(90deg, #0b1533 0%, #08122b 100%)",
    color: "#ffffff",
    fontSize: 18,
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

  const renderInput = (name, label, placeholder) => (
    <div style={fieldWrapStyle}>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );

  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
        <div style={logoWrapStyle}>
          <img
            src="/logo.png"
            alt="Prof Sigorta"
            style={{ height: 44, width: "auto", objectFit: "contain" }}
          />
        </div>

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
      </div>

      <div style={outerWrapStyle}>
        <div style={leftCardStyle}>
          <div style={titleRowStyle}>
            <h1 style={titleStyle}>Özel Sağlık Sigortası</h1>
            <span style={badgeStyle}>Hızlı Teklif</span>
          </div>

          <p style={subtitleStyle}>
            Bilgilerinizi girin, size en uygun özel sağlık sigortası teklifini hazırlayalım.
          </p>

          <div style={gridStyle}>
            {renderInput("ad", "Ad", "Ad")}
            {renderInput("soyad", "Soyad", "Soyad")}
            {renderInput("tcKimlikNo", "TC Kimlik No", "11 haneli")}

            {renderInput("telefon", "Telefon", "05xx xxx xx xx")}
            {renderInput("email", "E-posta", "ornek@mail.com")}
            {renderInput("dogumTarihi", "Doğum Tarihi", "gg.aa.yyyy")}

            {renderInput("cinsiyet", "Cinsiyet", "Kadın / Erkek")}
            {renderInput("meslek", "Meslek", "Mesleğiniz")}
            {renderInput("boy", "Boy", "Örn. 178 cm")}

            {renderInput("kilo", "Kilo", "Örn. 78 kg")}
            {renderInput("sigaraKullanim", "Sigara Kullanımı", "Evet / Hayır")}
            {renderInput("medeniDurum", "Medeni Durum", "Bekar / Evli")}

            {renderInput("il", "İl", "Örn. Kayseri")}
            {renderInput("ilce", "İlçe", "Örn. Melikgazi")}
            {renderInput("aileDahilMi", "Aile Dahil mi?", "Evet / Hayır")}

            {renderInput("mevcutSigortaVarMi", "Mevcut Sigorta Var mı?", "Evet / Hayır")}
            {renderInput("mevcutSigortaSirketi", "Mevcut Sigorta Şirketi", "Varsa şirket adı")}
            {renderInput("teminatTercihi", "Teminat Tercihi", "Dar / Orta / Geniş kapsam")}

            {renderInput("yatarakTedavi", "Yatarak Tedavi", "İsteniyor / İstenmiyor")}
            {renderInput("ayaktaTedavi", "Ayakta Tedavi", "İsteniyor / İstenmiyor")}
            {renderInput("dogumTeminati", "Doğum Teminatı", "İsteniyor / İstenmiyor")}

            {renderInput("kronikRahatsizlik", "Kronik Rahatsızlık", "Varsa kısa açıklama")}
            {renderInput("gecmisAmeliyat", "Geçmiş Ameliyat / Tedavi", "Varsa kısa açıklama")}
            {renderInput("ekNot", "Ek Not", "Özel durum / ek bilgi")}
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

          <button type="button" onClick={handleSubmit} style={whatsappButtonStyle}>
            WhatsApp&apos;tan Yaz
          </button>
        </div>
      </div>
    </div>
  );
}