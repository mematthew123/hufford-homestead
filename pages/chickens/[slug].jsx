
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";

export const Chickens = ({ chicken }) => {
  const { name, body, image,price,breed } = chicken;

  const [imageUrl, setImageUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "er2tzasn",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
      <h1 className="font-extrabold text-gray-900" />
      <div className=" justify-center grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <div className="flex flex-col justify-center container mx-auto">
        <h1 className=" font-bold text-2xl text-blue-700 underline ">{name}</h1>
        <p className="text-lg text-gray-500">Breed:{breed}</p>
        <BlockContent blocks={body} />
        <p className="text-lg text-gray-500">${price}</p>
        </div>
        {imageUrl && (
          <img
            className={`rounded-lg shadow-lg `}
            src={imageUrl}
            alt={name}
          />
        )}
        <div className="flex flex-col justify-center container mx-auto">
          <h2 className="font-bold text-xl text-blue-700">
            Why Choose Our Chickens?
          </h2>
          <p className="text-lg text-gray-500">
            Our chickens are raised with love, care, and attention. We prioritize
            their well-being and ensure they have the best possible environment
            to grow and thrive.
          </p>
          <button
            onClick={toggleModal}
            className="bg-blue-700 text-white py-2 px-4 rounded mt-4 hover:bg-blue-800"
          >
            Contact Us
          </button>
          {modalOpen && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div
                  onClick={toggleModal}
                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                ></div>
                <div className="inline-block bg-white rounded-lg p-6 text-left overflow-hidden shadow-xl transform transition-all">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p>
                    To get in touch with us, you can either call or send us an
                    email.
                  </p>
                  <div className="flex flex-col mt-4">
                    <a
                      href="tel:+1234567890"
                      className="bg-blue-700 text-white py-2 px-4 rounded mb-2 hover:bg-blue-800"
                    >
                      Call: +1 (234) 567-890
                    </a>
                    <a
                      href="mailto:info@example.com"
                      className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800"
                    >
                      Email: huffordhomestead@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const query = encodeURIComponent(
    `*[ _type == "chicken" && slug.current == "${slug}" ]`
  );
  const url = `https://er2tzasn.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      notFound: true,
    };
  } else {
    const chicken = result.result[0];
    const imgBuilder = imageUrlBuilder({
      projectId: "er2tzasn",
      dataset: "production",
    });

    const serializedChicken = {
      ...chicken,
      image: {
        ...chicken.image,
        url: imgBuilder.image(chicken.image).width(800).height(650).url(),
      },
    };

    return {
      props: {
        chicken: serializedChicken,
      },
    };
  }
};

export default Chickens;
