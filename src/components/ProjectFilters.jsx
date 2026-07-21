const ProjectFilters = ({ projectFilter, setProjectFilter }) => {
  return (
    <div className="project-filter-buttons">

      <button
        className={projectFilter === "todos" ? "active" : ""}
        onClick={() => setProjectFilter("todos")}
      >
        Todos
      </button>

      <button
        className={projectFilter === "zacate" ? "active" : ""}
        onClick={() => setProjectFilter("zacate")}
      >
        🌱 Zacate
      </button>

      <button
        className={projectFilter === "paisajismo" ? "active" : ""}
        onClick={() => setProjectFilter("paisajismo")}
      >
        🌿 Paisajismo
      </button>

    </div>
  );
};

export default ProjectFilters;