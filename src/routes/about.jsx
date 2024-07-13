import React from "react";
import { Link } from "react-router-dom";
import ImageGrid from "../components/ImageGrid";

const About = () => {
  return (
    <>
      <h2 className="mt-10 text-4xl font-serif text-center">About Us</h2>
      <section className="container flex flex-col justify-center items-center mx-auto font-serif">
        <div className="w-full flex lg:flex-row-reverse md:flex-col-reverse sm:flex-col-reverse justify-center items-center">
          <div className="lg:w-[50%] md:w-[70%] sm:w-[100%] h-[400px] ml-5 ">
            <img
              className="w-[100%] h-[100%]  object-cover"
              src="\assets\catering-buffet (1).jpg"
              alt="about us"
            />
          </div>
          <div className="lg:w-[50%] md:w-[70%] sm:w-[90%]">
            <p className="text-lg leading-relaxed mt-4">
              Welcome to <span className="font-semibold">Suleman Caters</span>,
              where passion meets palate. We are dedicated to crafting
              unforgettable culinary experiences that delight the senses and
              create lasting memories.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mt-2">Our Story</h3>
              <p className="text-lg leading-relaxed">
                Suleman Caters started with a simple vision: to bring
                exceptional food and hospitality to every event. Founded 2010,
                we have grown from a small kitchen to a beloved fixture in
                RawalPindi's culinary scene. Our journey is fueled by a love for
                good food and a commitment to excellence.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mt-2">What We Do</h3>
              <p className="text-lg leading-relaxed">
                At Suleman Caters, we specialize in indian,chinese,japanese
                couzines. Whether it's an intimate gathering, corporate event,
                or lavish celebration, our team is here to cater to your every
                need. From bespoke menus crafted with the finest ingredients to
                impeccable service, we ensure every detail is perfect.
              </p>
            </div>
          </div>
        </div>
        {/*Second Container*/}
        <div className="max-w-3xl mx-auto">
          <div className="mt-8">
            <h3 className="text-xl font-semibold mt-2">Our Team</h3>
            <p className="text-lg leading-relaxed">
              Behind every successful event is a passionate team dedicated to
              culinary artistry and impeccable service. Meet our talented chefs
              and hospitality experts who bring creativity and professionalism
              to every dish and interaction.
            </p>
          </div>
          {/*Image grid */}
          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-cente gap-10r">
            <ImageGrid Image="/assets/catering-dishes-1024x694.jpg"/>
            <ImageGrid Image="/assets/Catering.jpg"/>
            <ImageGrid Image="/assets/corporate-catering-food.jpg"/>
            <ImageGrid Image="/assets/dallas-best-catering-services.jpg"/>
            <ImageGrid Image="/assets/food-catering-cuisine-culinary-gourmet-buffet-PWLS495-1-scaled.webp"/>
            <ImageGrid Image="/assets/Guide-To-Food-Presentation-in-Catering-Events.jpg"/>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mt-2">Why Choose Us</h3>
            <ul className="list-decimal list-inside text-lg">
              <li className="mt-2">
                Quality Ingredients: We source only the freshest and finest
                ingredients to create dishes that impress.
              </li>
              <li className="mt-2">
                Customization: Tailored menus and personalized service ensure
                your event reflects your unique style.
              </li>
              <li className="mt-2">
                Experience: With years of experience and a passion for
                hospitality, we guarantee a flawless event every time.
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg leading-relaxed mt-4">
              Experience the difference with{" "}
              <span className="font-semibold">Suleman Caters</span>. Whether
              you're planning a wedding, corporate function, or private party,
              let us exceed your expectations. Contact us today to discuss how
              we can make your event unforgettable.
            </p>
            <Link to="/contact">
              <button className="mt-5 bg-blue-950 hover:bg-blue-900 text-white py-2 px-4 rounded-lg transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
