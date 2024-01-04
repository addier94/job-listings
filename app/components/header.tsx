import React from "react";

const Header = () => {
  return (
    <header
      className="
        flex
        justify-center
        items-center
        h-40
        relative
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-primary
          bg-no-repeat
          bg-cover
          sm:hidden
        "
        style={{ backgroundImage: "url(/images/bg-header-mobile.svg)" }}
      ></div>
      <div
        className="
          absolute
          inset-0
          bg-primary
          hidden
          sm:block
          bg-cover
          bg-no-repeat
        "
        style={{ backgroundImage: "url(/images/bg-header-desktop.svg)" }}
      ></div>
    </header>
  );
};

export default React.memo(Header);
