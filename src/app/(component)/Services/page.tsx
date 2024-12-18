
const Services = () => {
  return (
    <>
      <div className="w-full h-full place-items-center  overflow-hidden mt-14 px-[5%] sm:px-[7%] md:px-[10%] text-white pb-14">
        <div>
          <h1 className="text-[3rem] mt-3 font-bold text-center md:text-left">
            My Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center ">
            <div className="box w-[300px] md:w-full cursor-pointer">
              <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                Web Development
              </h2>
              <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                I specialize in creating responsive, and dynamic websites
                tailored to yours needs.
              </p>
              <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer">
                Learn more
              </span>
            </div>
            <div className="box w-[300px] md:w-full cursor-pointer">
              <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                UI/UX Design
              </h2>
              <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                craft visually appealing and user-friendly interfaces for your
                projects.
              </p>
              <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer ">
                Learn more
              </span>
            </div>
            <div className="box w-[300px] md:w-full cursor-pointer">
              <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                SEO Optimization
              </h2>
              <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                optimize your website to rank higher on search engines, increase
                traffic and improve performance.
              </p>
              <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer ">
                Learn more
              </span>
            </div>
            <div className="box w-[300px] md:w-full cursor-pointer">
              <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                Web Hosting
              </h2>
              <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                host your website on a secure and fast server.
              </p>
              <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer ">
                Learn more
              </span>
            </div>
            <div className="box w-[300px] md:w-full cursor-pointer">
              <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                Maintenence
              </h2>
              <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                Keep your website up to date and secure.
              </p>
              <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer ">
                Learn more
              </span>
            </div>
            <div className="box w-[300px] md:w-full cursor-pointer">
              <h2 className="pt-10 md:pt-8 text-2xl font-semibold">
                E-Commerce
              </h2>
              <p className="text-sm lg:text-base mx-2 mt-3 capitalize">
                Build an online store to sell your products.
              </p>
              <span className="absolute bottom-6 left-[50%] translate-x-[-50%] cursor-pointer ">
                Learn more
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
