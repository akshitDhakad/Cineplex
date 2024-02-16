function Footer() {
  return (
    <div className="footer">
      <div className="item1">Cineflix</div>
      <div className="item2">
        Copyright © 2023{" "}
        <span className="hover:text-yellow-300 hover:cursor-pointer">
          Cineflix
        </span>
        . All Rights Reserved.
      </div>
      <div className="item3 mt-2">
        <div className="hover:text-blue-300 hover:cursor-pointer">
          Terms Of Use
        </div>
        <div className="hover:text-blue-300 hover:cursor-pointer">
          Privacy-Policy
        </div>
        <div className="hover:text-blue-300 hover:cursor-pointer">About Us</div>
        <div className="hover:text-blue-300 hover:cursor-pointer">Blogs</div>
        <div className="hover:text-blue-300 hover:cursor-pointer">FAQ</div>
      </div>
      <div className="item4"></div>
    </div>
  );
  hover: cursor - pointer;
}

export default Footer;
