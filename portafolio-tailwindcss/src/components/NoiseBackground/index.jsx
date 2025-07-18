import "./styles.css";
export function NoiseBackground() {
  return (
    <>
      <div className="noise fixed inset-x-0 top-0 -z-50 h-screen dark:bg-[#0c2c47] bg-secondary">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        ></svg>
      </div>
    </>
  );
}
