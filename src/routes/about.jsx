import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="container mx-auto py-8 px-4">
      <div>
        <img className='w-[100%] h-[100%]  mx-auto' src="\assets\catering-buffet (1).jpg" alt="about us" />
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>

        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold">Suleman Caters</span>, where passion meets palate. We are dedicated to crafting unforgettable culinary experiences that delight the senses and create lasting memories.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Our Story</h3>
          <p className="text-lg leading-relaxed">
          Suleman Caters started with a simple vision: to bring exceptional food and hospitality to every event. Founded 2010, we have grown from a small kitchen to a beloved fixture in RawalPindi's culinary scene. Our journey is fueled by a love for good food and a commitment to excellence.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What We Do</h3>
          <p className="text-lg leading-relaxed">
            At Suleman Caters, we specialize in indian,chinese,japanese couzines. Whether it's an intimate gathering, corporate event, or lavish celebration, our team is here to cater to your every need. From bespoke menus crafted with the finest ingredients to impeccable service, we ensure every detail is perfect.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-lg leading-relaxed">
            Behind every successful event is a passionate team dedicated to culinary artistry and impeccable service. Meet our talented chefs and hospitality experts who bring creativity and professionalism to every dish and interaction.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Why Choose Us</h3>
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">Quality Ingredients: We source only the freshest and finest ingredients to create dishes that impress.</li>
            <li className="mb-2">Customization: Tailored menus and personalized service ensure your event reflects your unique style.</li>
            <li className="mb-2">Experience: With years of experience and a passion for hospitality, we guarantee a flawless event every time.</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-lg leading-relaxed mb-4">
            Experience the difference with <span className="font-semibold">Suleman Caters</span>. Whether you're planning a wedding, corporate function, or private party, let us exceed your expectations. Contact us today to discuss how we can make your event unforgettable.
          </p>
          <Link to="/contact"><button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300">Contact Us</button></Link>
        </div>

      </div>
    </section>
  );
};

export default About;
