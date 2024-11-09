import image1 from "../../../../public/20241101_181708.png";
import Image from "next/image";
const Home = () => {
  return (
    <div className="bg-black w-full h-[530px] flex relative md:justify-between overflow-hidden">
      <div className="text-white w-[800px] px-[5%] py-52 sm:px-[7%] md:px-[10%]  z-10">
        <p className=" md:text-[1.5rem]">UI/UX Designer</p>
        <h1 className="text-xl sm:text-3xl md:text-[2.5rem] font-bold leading-tight md:leading-snug">
          Hi, i'm <span>Mohsin</span>,<br /> Ali From Pakistan, <br />A FullStack <span>Web-Developer.</span>
        </h1>
      </div>
      <Image
        src={image1}
        alt="Image"
        className="w-[400px] absolute right-[-150px] md:right-[-100px] lg:static lg:w-[600px] h-full"
      ></Image>
    </div>
  );
};

export default Home;
