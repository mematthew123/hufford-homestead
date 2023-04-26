/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import ChickenImage from '../public/chickenHeld.jpg';
import GoatImage from '../public/goatInHay.jpg';
import EggImage from '../public/eggs.jpg';
import Link from 'next/link';

import Image from 'next/image';
const Home = () => {
  return (
    <>
    <Head>
      <title>Hufford Homestead</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="min-h-screen ">
      <section className="bg-cover bg-center py-20" >
        <div className="text-center text-papaya-whip">
          <h2 className="text-5xl font-bold">Welcome to Hufford Homestead</h2>
          <p className="text-2xl mt-4">The home of sustainable and organic farming</p>
        </div>
      </section>
      <section className="py-16 ">
        <h2 className="text-center text-4xl font-bold text-cornsilk mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg p-6">
              <Link href="/goats">
              <Image src={GoatImage} alt="Goats" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-reseda-green mb-2">Goats</h3>
              <p>Healthy and well-taken-care-of goats for milk and meat.</p>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6">
              <Link href="/chickens">
              <Image src={ChickenImage} alt="Chickens" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-reseda-green mb-2">Chickens</h3>
              <p>Free-range chickens for eggs and meat.</p>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6">
              <Link href="/eggs">
              <Image src={EggImage} alt="Eggs" className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-reseda-green mb-2">Eggs</h3>
              <p>Free-range chicken eggs.</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-tea-green py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-ash-gray mb-4">Contact Us</h2>
            <p className="text-2xl text-ash-gray mb-4">We'd love to hear from you!</p>
            </div>
        </section>
      </div>
    </>
  );
};

export default Home;

