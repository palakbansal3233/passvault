const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5">
        <div className="logo font-bold text-2xl">
          <span className="text-purple-300">&lt;</span>Pass
          <span className="text-purple-300">Vault/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
