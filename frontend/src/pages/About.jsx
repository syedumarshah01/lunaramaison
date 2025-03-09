import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about"
          loading="lazy"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Lunara Maison, where elegance meets tradition. We take
            pride in curating a stunning collection of artificial jewellery that
            embodies grace, charm, and timeless beauty. Each piece is
            thoughtfully designed to add a touch of sophistication to your
            everyday and special moments. In addition to our exquisite
            jewellery, we celebrate cultural heritage through our handcrafted
            Peshawari Chappals—a perfect blend of comfort, durability, and
            classic craftsmanship. Whether you're looking for statement
            jewellery or traditional footwear, Lunara Maison ensures premium
            quality, intricate designs, and affordable luxury. Step into a world
            where tradition and modern elegance come together—because style
            begins with the right details.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            To blend tradition with elegance by offering high-quality artificial
            jewellery and handcrafted Peshawari chappals, ensuring timeless
            style, comfort, and affordability for everyone.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We ensure premium craftsmanship, durable materials, and meticulous
            attention to detail, delivering elegance and reliability in every
            piece.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Seamless shopping with easy ordering, secure payments, and doorstep
            delivery—luxury made effortless.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Your satisfaction is our priority—responsive support, hassle-free
            returns, and a seamless shopping experience.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
