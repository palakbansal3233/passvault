const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center px-4 w-100 h-14">
      <div className="logo font-bold">Password Vault</div>
      <ul>
        <li className="flex gap-4">
          <a className="hover:font-bold" href="/">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
