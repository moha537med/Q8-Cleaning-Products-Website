const HeroSection = ({image, heading, text, textColor = "text-white", children}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`  
      }}
      className="
        hero w-full flex items-center justify-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] bg-cover bg-center max-md:bg-position-[center_left]
        md:bg-position-[70%_center] lg:bg-position-[80%_center] relative ">

      {/* Mobile overlay */}
      <div className=" absolute inset-0 bg-linear-to-b from-[#0E2B52]/70 via-[#163A6B]/45 to-[#163A6B]/35 md:hidden " ></div>

      <div className="flex flex-col sm:items-center md:items-start mr-15 gap-10 w-[80%] z-50 max-lg:mr-10 max-md:mr-0 max-md:w-[90%] max-md:gap-6 " >
        <h1
          className={`  max-md:text-center md:w-1/2 leading-20 text-3xl lg:text-5xl max-md:w-full md:text-4xl max-md:leading-12 sm:text-3xl max-sm:leading-10 ${textColor} md:text-(--primary-dark) `}>
          {heading}
        </h1>

        <p className={`  max-md:text-center ${textColor}  md:text-(--primary-dark) max-md:leading-7 `}>
          {text}
        </p>

        {children}
      </div>
    </section>
  );
};

export default HeroSection;
