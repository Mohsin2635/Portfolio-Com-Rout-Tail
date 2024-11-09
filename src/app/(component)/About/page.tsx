import image1 from "../../../../public/file (1).png";
import image2 from "../../../../public/Programing-Icons/icons8-html-5-60.png";
import image3 from "../../../../public/Programing-Icons/icons8-css3-60.png";
import image4 from "../../../../public/Programing-Icons/icons8-typescript-60.png";
import image5 from "../../../../public/Programing-Icons/icons8-python-60.png";
import image6 from "../../../../public/Programing-Icons/icons8-javascript-60.png";
import image7 from "../../../../public/Programing-Icons/icons8-react-60.png";
import image8 from "../../../../public/Programing-Icons/Next-icon.webp";
import image9 from "../../../../public/Programing-Icons/icons8-tailwind-css-60.png";
import image10 from "../../../../public/Programing-Icons/icons8-visual-studio-code-2019-60.png";
import image11 from "../../../../public/Programing-Icons/icons8-figma-60.png";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className=" lg:flex lg:justify-between place-items-center lg:place-items-start bg-black px-[5%] sm:px-[7%] md:px-[10%] w-full h-full lg:h-[600px] overflow-hidden mt-8 md:mt-16 ">
        <div className="w-[350px] sm:w-[400px] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] bg-[#262626] rounded-lg mt-8">
          <Image
            src={image1}
            alt="Image"
            className="w-full h-[400px] sm:h-[500px] bg-cover object-fill px-5"
          />
        </div>

        <div className="lg:w-[50%] xl:w-[55%] 2xl:w-[60%]">
          <h1 className="text-white text-[3rem] text-center lg:text-left font-bold mt-5">
            About Me
          </h1>
          <p className="text-[#adadad] text-[1.1rem] italic mt-2 lg:mt-0 capitalize">
            I am a UI/UX Designer and FullStack Web Developer, with a passion
            for creating visually appealing and user-friendly interfaces. My
            favorite part of programming is the problem-solving aspect. i love
            the feeling of finally figuring out a solution to a problem. my core
            stack is
            <span> React, Next.js, and Node.js.</span> i am also familiar with
            <span> Typescript.</span> i am always looking to learn new
            technologies. <br />
            when i'm not cooding, i enjoy playing video games, watching movies
            and surfing over web to keep myself updated.
          </p>
          <h2 className="text-[2rem] font-bold py-2">
            <span>My BackPack</span>
          </h2>
          <ul>
            <li className="italic text-white text-[1.1rem]">
              <p>Technologies I Used!</p>
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-2">
            <div className="box1">
              <Image src={image2} alt="html" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image3} alt="Css3" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image4} alt="typescript" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image5} alt="pythone" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image6} alt="javascript" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image7} alt="React" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image8} alt="Next.js" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image9} alt="tailwind" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image10} alt="vs code" className="w-full h-full" />
            </div>
            <div className="box1">
              <Image src={image11} alt="figma" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
