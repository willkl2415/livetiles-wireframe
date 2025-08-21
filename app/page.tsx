// app/page.tsx
import "./skills.css";

export default function Home() {
  return (
    <main className="app-container">
      {/* Title */}
      <h1 className="app-title">Skills-Forge</h1>
      <p className="subtitle">The Ultimate Skills Engine</p>

      {/* Industry */}
      <label className="label">Industry</label>
      <select>
        <option>Dropdown Placeholder</option>
      </select>

      {/* Function */}
      <label className="label">Function</label>
      <select>
        <option>Dropdown Placeholder</option>
      </select>

      {/* Role */}
      <label className="label">Role</label>
      <select>
        <option>Dropdown Placeholder</option>
      </select>

      {/* Search Skills */}
      <label className="label">Search Skills</label>
      <div className="toggle-container">
        <div className="toggle-pill active">Domain</div>
        <div className="toggle-pill">General</div>
      </div>

      <button className="search-btn">Search</button>

      {/* Skills Grid */}
      <div className="skills-grid">
        <div className="skill-card">Skill Card Placeholder 1</div>
        <div className="skill-card">Skill Card Placeholder 2</div>
        <div className="skill-card">Skill Card Placeholder 3</div>
      </div>

      {/* Buttons */}
      <div className="button-row">
        <button className="expand-btn">Expand</button>
        <button className="clear-btn">Clear</button>
      </div>
    </main>
  );
}
