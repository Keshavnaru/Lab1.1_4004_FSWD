function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {currentYear} PiXELL River Financial
      </p>
    </footer>
  );
}

export default Footer;