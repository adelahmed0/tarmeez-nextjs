export default function ({ children }) {
  return (
    <div>
      <h3>Articles Layout</h3>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "blue",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
