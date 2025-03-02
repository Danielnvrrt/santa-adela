import React from "react";

export const Header = (props) => {
  return (
    <header id="header" className="relative bg-gray-900 text-white">
      <div className="intro">
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex justify-center">
            <div className="text-center max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                {props.data ? props.data.title : "Loading"}
                <span className="block"></span>
              </h1>
              <p className="text-lg md:text-xl mb-8">
                {props.data ? props.data.paragraph : "Loading"}
              </p>
              <a
                href="#features"
                className="btn bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
