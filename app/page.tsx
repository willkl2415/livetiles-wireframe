// app/page.tsx
export default function Home() {
  return (
    <div className="phone-frame">
      <main className="app-container">
        <h1 className="app-title">Skills-Forge</h1>
        <p className="subtitle">The Ultimate Skills Engine</p>

        {/* Industry */}
        <div style={{ width: "100%" }}>
          <label className="label">Industry</label>
          <select>
            <option>Dropdown Placeholder</option>
          </select>
        </div>

        {/* Function */}
        <div style={{ width: "100%" }}>
          <label className="label">Function</label>
          <select>
            <option>Dropdown Placeholder</option>
          </select>
        </div>

        {/* Role */}
        <div style={{ width: "100%" }}>
          <label className="label">Role</label>
          <select>
            <option>Dropdown Placeholder</option>
          </select>
        </div>

        {/* Search Skills */}
        <div style={{ width: "100%" }}>
          <label className="label">Search Skills</label>
          <div className="toggle-container">
            <div className="toggle-pill active">Domain</div>
            <div className="toggle-pill">General</div>
          </div>
          <button className="search-btn">Search</button>
        </div>

        {/* Skills Cards */}
        <div className="skills-grid">
          <div className="skill-card">Skill Card Placeholder 1</div>
          <div className="skill-card">Skill Card Placeholder 2</div>
          <div className="skill-card">Skill Card Placeholder 3</div>
        </div>

        {/* Expand & Clear Buttons */}
        <div className="button-row">
          <button className="expand-btn">Expand</button>
          <button className="clear-btn">Clear</button>
        </div>
      </main>
    </div>
  );
}
