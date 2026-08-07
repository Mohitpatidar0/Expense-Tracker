import React from "react";

const AuthLayout = ({ children }) => {
  return (

      <div className="flex justify-center">
      <div className="w-screen h-screen md:w-[50vw] max-w-[600px] px-12 pt-8 pb-12">
        <h2 className="text-center text-lg font-medium text-black">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto inline" /> Nivesh
        </h2>
        {children}
      </div>
</div>

  );
};

export default AuthLayout;
