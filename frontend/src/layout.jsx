const Layout = ({ children }) => {
    return (
      <div>
        <main style={{ padding: "1rem" }}>{children}</main>
        <footer style={{ background: "#293D82", color: "#fff", padding: "1rem", marginTop: "1rem" }}>
          <p>© 2025 Paragon Robotics</p>
        </footer>
      </div>
    );
  };
  

  export default Layout;