// src/app/police/[slug]/page.js

export default function PolicePage({ params }) {
  // Next.js burada her zaman params.slug gönderir
  const slug = params.slug || "";

  // Şimdilik sadece 2. el trafik için özel içerik ayırıyoruz
  const isSecondHandTraffic = slug === "2-el-trafik";

  // Başlıkta kullanmak için okunaklı hale getirilmiş slug
  const prettySlugTitle =
    slug.length > 0
      ? slug.replace(/-/g, " ").toUpperCase()
      : "POLİÇE DETAYI";

  return (
    <main
      style={{
        padding: 40,
        maxWidth: 1100,
        margin: "0 auto",
        minHeight: "100vh",
        backgroundColor: "#111",
        color: "#fff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, system-ui, Segoe UI, sans-serif",
      }}
    >
      {/* ÜST BAŞLIK */}
      <h1
        style={{
          fontSize: 30,
          fontWeight: 700,
          marginBottom: 16,
          textAlign: "left",
        }}
      >
        {prettySlugTitle}
      </h1>

      {/* Açıklama satırı */}
      <p style={{ fontSize: 16, marginBottom: 24 }}>
        Buraya {prettySlugTitle} ürünü için detaylı içerik ve teklif formu
        gelecektir.
      </p>

      {/* Sadece 2.EL TRAFİK sayfasında gözükecek örnek blok */}
      {isSecondHandTraffic && (
        <div
          style={{
            padding: 20,
            borderRadius: 12,
            backgroundColor: "#1b1b1b",
            marginBottom: 24,
            lineHeight: 1.5,
          }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>
            2. El Araçlarda Yeni Dönem: Önce Trafik Poliçesi Sonra Ruhsat
          </h2>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li>
              Noter satış işleminden önce kendi adınıza trafik sigortası yaptırmak
              zorunludur.
            </li>
            <li>
              Poliçe için satıcının ruhsat bilgilerinin alınması genellikle
              yeterlidir.
            </li>
            <li>
              Noterde sürpriz yaşamamak için poliçenizi önceden hazırlayın.
            </li>
          </ul>
        </div>
      )}

      {/* Diğer ürünlerde göstereceğimiz basit placeholder */}
      {!isSecondHandTraffic && (
        <div
          style={{
            padding: 20,
            borderRadius: 12,
            backgroundColor: "#1b1b1b",
          }}
        >
          <p style={{ margin: 0 }}>
            Bu sayfa şu anda <strong>{prettySlugTitle}</strong> için örnek
            içerik göstermektedir. Daha sonra buraya ilgili ürünün açıklaması ve
            teklif formu eklenecek.
          </p>
        </div>
      )}
    </main>
  );
}