"use client";
import InputField from "@/components/InputField";
import Nav from "@/components/Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import email from "@/assets/icons/email.png";

const textDisplays = [
  "beautiful",
  "stunning",
  "gorgeous",
  "breathtaking",
  "exqusite",
];
export default function Home() {
  const [text, setText] = useState<string>("beautiful");
  const [formData, setFormdData] = useState({
    name: "",
    email: "",
  });

  // this change displayed text
  const changeText = () => {
    const randomIndex = Math.floor(Math.random() * textDisplays.length);
    setText(textDisplays[randomIndex]);
  };
  // useEffect to change text automatucally
  useEffect(() => {
    const interval = setInterval(changeText, 3000);
    // This clearnup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // form handle function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="">
      {/* <Nav /> */}

      <main className=" gap-8 row-start-2 items-center">
        <div className="md:flex md:flex-wrap md:place-self-center md:flex-row sm:flex-col sm:mb-[10rem] sm:justify-center sm:flex ">
          <div className="md:shrink-0 md:mr-10 sm:mb-10 sm:mr-0">
            <Image
              src="/IMG-20250113-WA0008.jpg"
              width={500}
              height={500}
              alt="main picture"
              // className="sm:h-[300px] sm:w-[300px] md:h-[1000px] md:w-[1000px]"
            />
          </div>
          <div className="text-yellow-700 text-7xl ">
            <p className=" font-bold">Speak</p>
            <span className="font-bold pl-20 m-10 pt-10 pb-10 text-blue-800">
              {text}
            </span>
            <p className="font-bold pl-20">British English</p>
          </div>
        </div>
        <div className="relative">
          <div className="bg-blue-800 ml-[-20px] -mt-20 h-[450px] sticky rotate-[-1.3deg] ">
            <div className="text-white place-self-center relative -mt-[250px] w-full pb-[200px]">
              <div className="place-content-center text-center justify-items-center  sm:flex-wrap">
                <div className="flex mt-20">
                  <div className="text-3xl mb-3 font-bold sm:flex-wrap md:flex-wrap w-[550px] p-3">
                    <h2 className="text-center ">
                      Join my newsletters and receive more English lessons for
                      FREE
                    </h2>
                  </div>
                </div>
                <div className="">
                  <form className="flex sm:flex-col sm:flex-wrap">
                    <InputField
                      value={formData.name}
                      type="text"
                      size={40}
                      onChange={handleChange}
                      placeholder="Name"
                      name="Name"
                      required
                    />

                    <InputField
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      name="email"
                      type="email"
                      required
                      size={40}
                    />

                    <button className="bg-yellow-700 h-[40px] pr-[20px] pl-[20px] rounded-md font-bold">
                      <a href=""> Join Now</a>
                    </button>
                  </form>
                </div>
                <div className="font-bold mt-[10px]">
                  <p>
                    We will protect your data in accordance with our
                    <a href="/privacy" className="pl-2 text-yellow-700">
                      privacy policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-lg mr-lg">
          <div className="flex  ml-[15rem]  mr-[15rem] md:flex-wrap">
            <div className="block p-[2rem]">
              <div className="text-lg">
                <div className="mb-[20px]">
                  <h2 className="font-bold text-[40px]">Hello, I'm Sandra</h2>
                </div>
                <p className="mb-[1rem]">
                  <span>
                    I grew up in a tiny village in the English countryside, but
                    I’ve always had big dreams.
                  </span>
                </p>
                <p className="mb-[1rem]">
                  <span>
                    Now, my goal is to help the world to speak English
                    confidently and fluently! Learning a foreign language
                    doesn’t have to be scary, embarrassing or boring.
                  </span>
                </p>
                <p className="mb-[1rem]">
                  <span>
                    I will teach you to enjoy the language-learning process so
                    that you can feel proud of every word you say.
                  </span>
                </p>
                <p className="mb-[1rem]">
                  <span>
                    Over six million students have joined me on their journey to
                    English fluency – what are you waiting for? Come and join
                    me!
                  </span>
                </p>
              </div>
            </div>
            <div className="items-center p-[2rem]">
              <figure>
                <img src="/IMG-20250113-WA0008.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </main>

      {/* <div className="mx-20 mt-20">
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div> */}
    </div>
  );
}
