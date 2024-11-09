import image1 from "../../../../public/projects/Governor-Image.jpg";
import image2 from "../../../../public/projects/Amazone image.webp";
import image3 from "../../../../public/projects/login.jpg";
import image4 from "../../../../public/projects/age-calculations.jpg";
import image5 from "../../../../public/projects/resume-builder.jpg";
import image6 from "../../../../public/projects/Portfolio (2).jpg";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="w-full h-full lg:h-[1150px] overflow-hidden place-items-center lg:place-items-start px-[5%] sm:px-[7%] md:px-[10%] mt-10 md:mt-0 text-white">
        <h1 className="mt-10 font-bold">My Projects</h1>
        <div className="sm:flex justify-between flex-wrap overflow-hidden mt-3">
          <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
            <Image
              src={image1}
              alt="image"
              className="w-full h-full object-fill rounded-xl"
            />
            <div
              className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
              }}
            >
              <h2 className="text-3xl">Governor Website Clone</h2>
              <p>
                This Governor Website is full Resposive, Build in Next.js, Click
                The Link Button, See The website and Send me also Feedbacks.
              </p>
              <Link
                href="https://governor-website-clone.vercel.app"
                className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                >
                  <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="image"
              className="w-full h-full object-fill rounded-xl"
            />
            <div
              className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
              }}
            >
              <h2 className="text-3xl">Amazone Website Clone</h2>
              <p>
                This Amazone Ecommerce Website , Build in Core Html, and Css,
                Click The Link Button, See The website and Send me also
                Feedbacks.
              </p>
              <Link
                href="https://amazon-in-clone.vercel.app/"
                className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                >
                  <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
            <Image
              src={image3}
              alt="image"
              className="w-full h-full object-fill rounded-xl"
            />
            <div
              className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
              }}
            >
              <h2 className="text-3xl">Login Page</h2>
              <p>
                This Login Page is full Resposive, Build in Core Html, and Css,
                Click The Link Button, See The website and Send me also
                Feedbacks.
              </p>
              <Link
                href="https://login-page-gules-kappa.vercel.app"
                className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                >
                  <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
            <Image
              src={image4}
              alt="image"
              className="w-full h-full object-fill rounded-xl"
            />
            <div
              className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
              }}
            >
              <h2 className="text-3xl">Age Finder</h2>
              <p>
                This Age Finder Website taking one Input and Give You output,
                Build in Html, Css, and JavaScript, Click The Link Button, See
                The website and Send me also Feedbacks.
              </p>
              <Link
                href="https://age-finder-ecru.vercel.app"
                className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                >
                  <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
            <Image
              src={image5}
              alt="image"
              className="w-full h-full object-fill rounded-xl"
            />
            <div
              className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
              }}
            >
              <h2 className="text-3xl">Resume Builder</h2>
              <p>
                This Resume Builder Taking Inputs and Generate a Professional
                Resume , Build in Core Html, Css, and JavaScript, Click The Link
                Button, See The website and Send me also Feedbacks.
              </p>
              <Link
                href="https://hackathone-milestone-5-two.vercel.app/"
                className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                >
                  <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="work w-full h-[500px] md:h-[400px] sm:w-[48%] md:w-[30%] mt-10 relative rounded-xl overflow-hidden">
            <Image
              src={image6}
              alt="image"
              className="w-full h-full object-fill rounded-xl"
            />
            <div
              className="project-contet w-full h-0 absolute left-0 top-0 flex justify-center items-center flex-col px-10 gap-5 text-center text-base overflow-hidden duration-500"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), #ff0000)",
              }}
            >
              <h2 className="text-3xl">Portfolio</h2>
              <p>
                This Portfolio is full Resposive, If you Want To Build Your
                Portfolio than Please Contact me, This Portfolio Build in
                Next.js, Click The Link Button, See The website and Send me also
                Feedbacks.
              </p>
              <Link
                href="#"
                className="text-[#ff004f] bg-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl mt-8 duration-500 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                >
                  <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-11 mt-8 flex justify-center items-center">
          <button className="h-full w-52 rounded-xl text-lg font-medium bg-[#ff004f] cursor-pointer border-none outline-none duration-300 hover:bg-[#b80e4a] active:bg-[#ff004f]">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
