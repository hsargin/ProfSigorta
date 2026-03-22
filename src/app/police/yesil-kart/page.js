"use client";

import { useState } from "react";

export default function Page() {
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
      const cleaned = value.replace(/[^\d\s]/g, "").slice(0, 15);
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
    const mesaj = `Yeşil Kart Sigortası Teklif Talebi

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
Başlangıç: ${form.baslangicTarihi}
Bitiş: ${form.bitisTarihi}

Geçerli Trafik Poliçesi Var mı?: ${form.trafikPoliceVarMi}
Trafik Poliçesi Bitiş: ${form.trafikPoliceBitis}

Şirket Aracı mı?: ${form.sirketAraciMi}
Vergi No: ${form.vergiNo}
Şirket Ünvanı: ${form.sirketUnvani}

Teslim Adresi: ${form.teslimAdresi}
Ek Not: ${form.ekNot}

Kaynak: Web Form`;

    const url =
      "https://wa.me/905301096161?text=" + encodeURIComponent(mesaj);
    window.open(url, "_blank");
  }

  const focusOn = (e) => {
    e.target.style.border = "1px solid #2563eb";
  };

  const focusOff = (e) => {
    e.target.style.border = "1px solid #dde5ef";
  };

  const inputStyle = {
    width: "100%",
    height: "36px",
    padding: "0 10px",
    border: "1px solid #dde5ef",
    borderRadius: "9px",
    background: "#ffffff",
    color: "#0f172a",
    outline: "none",
    fontSize: "12px",
    boxShadow: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    boxSizing: "border-box",
    transition: "all 0.15s ease",
  };

  const selectStyle = {
    ...inputStyle,
    cursor: "pointer",
  };

  const labelStyle = {
    fontSize: "11px",
    fontWeight: "700",
    color: "#334155",
    marginBottom: "3px",
    display: "block",
  };

  const fieldStyle = {
    minWidth: 0,
  };

  const headerStyle = {
    background: "#ffffff",
    borderBottom: "1px solid #e9edf3",
    padding: "8px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "12px",
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
        <img
          src="/logo.png"
          alt="Prof Sigorta"
          style={{ height: "40px", width: "auto", display: "block" }}
        />

        <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
          Doğru Teklif , Doğru Fiyat
        </div>
      </div>

      <div
        style={{
          maxWidth: "1360px",
          margin: "50px auto",
          padding: "0 14px 14px",
          display: "flex",
          gap: "14px",
          alignItems: "stretch",
        }}
      >
        <div style={{ ...cardStyle, flex: 1 }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <h2
              style={{
                margin: 0,
                color: "#0f172a",
                fontWeight: "900",
                fontSize: "18px",
              }}
            >
              Yeşil Kart Sigortası
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
            Bilgilerinizi girin, Yeşil Kart sigortası için en uygun teklifi hazırlayalım.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              columnGap: "10px",
              rowGap: "6px",
            }}
          >
            <div style={fieldStyle}>
              <label style={labelStyle}>Ad</label>
              <input name="ad" value={form.ad} onChange={handleChange} style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Soyad</label>
              <input name="soyad" value={form.soyad} onChange={handleChange} style={inputStyle} onFocus={focusOn} onBlur={focusOff} />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>TC / Vergi No</label>
              <input
                name="tcVkn"
                value={form.tcVkn}
                onChange={handleChange}
                placeholder="TCKN veya VKN"
                style={inputStyle}
                inputMode="numeric"
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Telefon</label>
              <input
                name="telefon"
                value={form.telefon}
                onChange={handleChange}
                placeholder="05xx xxx xx xx"
                style={inputStyle}
                inputMode="tel"
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>E-posta</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="ornek@mail.com"
                style={inputStyle}
                inputMode="email"
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Plaka</label>
              <input
                name="plaka"
                value={form.plaka}
                onChange={handleChange}
                placeholder="34 ABC 123"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Ruhsat Seri No</label>
              <input
                name="ruhsatNo"
                value={form.ruhsatNo}
                onChange={handleChange}
                placeholder="AB123456"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Ruhsat Sahibi</label>
              <input
                name="ruhsatSahibi"
                value={form.ruhsatSahibi}
                onChange={handleChange}
                placeholder="Ad Soyad / Firma Ünvanı"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Araç Tipi</label>
              <select
                name="aracTipi"
                value={form.aracTipi}
                onChange={handleChange}
                style={selectStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              >
                <option value="">Seçiniz</option>
                <option value="Otomobil">Otomobil</option>
                <option value="Motosiklet">Motosiklet</option>
                <option value="Kamyonet">Kamyonet</option>
                <option value="Minibüs">Minibüs</option>
                <option value="Otobüs">Otobüs</option>
                <option value="Çekici">Çekici</option>
                <option value="Karavan">Karavan</option>
                <option value="Römork">Römork</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Araç Marka / Model</label>
              <input
                name="aracMarkaModel"
                value={form.aracMarkaModel}
                onChange={handleChange}
                placeholder="Volkswagen Passat"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Şase No</label>
              <input
                name="saseNo"
                value={form.saseNo}
                onChange={handleChange}
                placeholder="17 karaktere kadar"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Gidilecek Ülkeler</label>
              <input
                name="gidilecekUlkeler"
                value={form.gidilecekUlkeler}
                onChange={handleChange}
                placeholder="Bulgaristan, Sırbistan..."
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Başlangıç</label>
              <input
                type="date"
                name="baslangicTarihi"
                value={form.baslangicTarihi}
                onChange={handleChange}
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Bitiş</label>
              <input
                type="date"
                name="bitisTarihi"
                value={form.bitisTarihi}
                onChange={handleChange}
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Geçerli Trafik Poliçesi Var mı?</label>
              <select
                name="trafikPoliceVarMi"
                value={form.trafikPoliceVarMi}
                onChange={handleChange}
                style={selectStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              >
                <option value="">Seçiniz</option>
                <option value="Evet">Evet</option>
                <option value="Hayır">Hayır</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Trafik Poliçesi Bitiş</label>
              <input
                type="date"
                name="trafikPoliceBitis"
                value={form.trafikPoliceBitis}
                onChange={handleChange}
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Şirket Aracı mı?</label>
              <select
                name="sirketAraciMi"
                value={form.sirketAraciMi}
                onChange={handleChange}
                style={selectStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              >
                <option value="">Seçiniz</option>
                <option value="Hayır">Hayır</option>
                <option value="Evet">Evet</option>
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Vergi No</label>
              <input
                name="vergiNo"
                value={form.vergiNo}
                onChange={handleChange}
                placeholder="10 haneli"
                style={inputStyle}
                inputMode="numeric"
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Şirket Ünvanı</label>
              <input
                name="sirketUnvani"
                value={form.sirketUnvani}
                onChange={handleChange}
                placeholder="Firma adı"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Teslim Adresi</label>
              <input
                name="teslimAdresi"
                value={form.teslimAdresi}
                onChange={handleChange}
                placeholder="Teslim adresi"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Ek Not</label>
              <input
                name="ekNot"
                value={form.ekNot}
                onChange={handleChange}
                placeholder="Özel durum / acil tarih"
                style={inputStyle}
                onFocus={focusOn}
                onBlur={focusOff}
              />
            </div>
          </div>

          <button
            onClick={sendWhatsapp}
            style={{
              marginTop: "6px",
              width: "100%",
              background: "#0f172a",
              color: "#fff",
              height: "40px",
              border: "none",
              borderRadius: "12px",
              fontSize: "13px",
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
            width: "290px",
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
              marginTop: "10px",
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
                  width: "205px",
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
              marginTop: "10px",
              width: "100%",
              background: "#22c55e",
              color: "#fff",
              height: "40px",
              border: "none",
              borderRadius: "12px",
              fontSize: "13px",
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