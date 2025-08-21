// app/page.tsx
export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        gap: "1.5rem",
        maxWidth: "400px",
        margin: "0 auto",
        border: "2px dashed #ccc",
        borderRadius: "1rem",
        background: "#fafafa",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Wireframe Layout</h1>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        Placeholder only – no styling, just structure.
      </p>

      {/* Industry */}
      <div style={{ width: "100%" }}>
        <label>Industry</label>
        <div style={{ border: "1px solid #aaa", padding: "0.5rem", borderRadius: "0.5rem" }}>
          Dropdown Placeholder
        </div>
      </div>

      {/* Function */}
      <div style={{ width: "100%" }}>
        <label>Function</label>
        <div style={{ border: "1px solid #aaa", padding: "0.5rem", borderRadius: "0.5rem" }}>
          Dropdown Placeholder
        </div>
      </div>

      {/* Role */}
      <div style={{ width: "100%" }}>
        <label>Role</label>
        <div style={{ border: "1px solid #aaa", padding: "0.5rem", borderRadius: "0.5rem" }}>
          Dropdown Placeholder
        </div>
      </div>

      {/* Search */}
      <div style={{ width: "100%" }}>
        <label>Search Skills</label>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          <div style={{ flex: 1, border: "1px solid #aaa", padding: "0.5rem", borderRadius: "0.5rem", textAlign: "center" }}>
            Domain
          </div>
          <div style={{ flex: 1, border: "1px solid #aaa", padding: "0.5rem", borderRadius: "0.5rem", textAlign: "center" }}>
            General
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <div style={{ border: "1px solid #aaa", padding: "0.75rem 1.5rem", borderRadius: "9999px" }}>
          Expand
        </div>
        <div style={{ border: "1px solid #aaa", padding: "0.75rem 1.5rem", borderRadius: "9999px" }}>
          Clear
        </div>
      </div>
    </main>
  );
}
