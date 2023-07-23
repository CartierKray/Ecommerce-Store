const Footer = () => {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "rgba(20, 20, 20, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-white">
          {" "}
          © 2023 - Capital Performance - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
