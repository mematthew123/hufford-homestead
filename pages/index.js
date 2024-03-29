/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import ChickenImage from "../public/chickenHeld.jpg";
import GoatImage from "../public/whiteGoate.jpg";
import EggImage from "../public/eggs.jpg";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Locate } from "@/components/Locate";
import ContactModal from "@/components/ContactModal";


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  return (
    <>
      <Head>
        <title>Hufford Homestead</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hufford Homestead is a small farm in Glens Ferry, Idaho. We raise goats and chickens and sell eggs." />
        <meta name='keywords' content='Hufford Homestead, Homestead, Farm, Goats, Chickens, Eggs, Organic, Sustainable, Glens Ferry, Twin Falls, Idaho' />
        <meta name='author' content='Hufford Homestead' />
      </Head>
        <section className="bg-cover bg-center h-screen  py-20 flex items-center justify-center">
          <div className="text-center text-gray-800">
            <h2 className="text-5xl text-gray-800 font-bold font-fraunces text-fraunces-40 leading-fraunces-48">
              Welcome to Hufford Homestead
            </h2>
            <p className=" text-gray-800 text-lg lg:text-2xl mt-4 font-barlow text-barlow-16 leading-barlow-24">
              The home of sustainable and organic farming
            </p>
          </div>
        </section>

        <section className="lg:py-16 sm:py-4 mb-32 lg:mb-0 ">
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 font-fraunces text-fraunces-40 leading-fraunces-48">
            Our Homestead
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-2">
            <div className="bg-gray-50 rounded-lg p-6">
              <Link href="/goats">
                <Image
                  src={GoatImage}
                  alt="Goats"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Goats</h3>
                <p>Healthy and well-taken-care-of goats.</p>
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <Link href="/chickens">
                <Image
                  src={ChickenImage}
                  alt="Chickens"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Chickens
                </h3>
                <p>Free-range chickens for eggs and meat.</p>
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <Link href="/eggs">
                <Image
                  src={EggImage}
                  alt="Eggs"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Eggs</h3>
                <p>Free-range chicken eggs.</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-tea-green py-8">
          <div className="container mx-auto text-center">
            <h2 className=" pt-8 text-2xl font-bold text-gray-50 mb-4 font-fraunces text-fraunces-40 leading-fraunces-48">
              We'd love to hear from you!
            </h2>
            <p className="text-xl text-gray-800 mb-1">
              <button
                onClick={toggleModal}
                className="bg-green-800 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-800"
              >
                Contact Us
              </button>
              <ContactModal modalOpen={modalOpen} toggleModal={toggleModal} />
            </p>
            <Locate />
          </div>
        </section>
    </>
  );
};

export default Home;
