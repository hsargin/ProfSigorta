export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6",
        fontFamily: "Inter, Arial, sans-serif",
        padding: 20,
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ marginBottom: 12, color: "#0f172a" }}>Sayfa Bulunamadı</h1>
        <p style={{ color: "#475569" }}>
          Aradığınız sayfa kaldırılmış, taşınmış veya yanlış yazılmış olabilir.
        </p>
      </div>
    </div>
  );
}