import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import ContactModal from "@/components/ContactModal";

export const Chickens = ({ chicken }) => {
  const { name, body, image, price, breed } = chicken;

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
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-2">
      <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center lg:space-x-12">
          <div className="flex flex-col justify-center container mx-auto lg:w-1/2">
            <h1 className=" py-2 font-bold text-2xl text-slate-800 underline">
              {name}
            </h1>
            {imageUrl && (
              <img
                className={`rounded-lg shadow-lg my-6 lg:my-0`}
                src={imageUrl}
                alt={name}
              />
            )}
            <BlockContent blocks={body} />
            <p className=" py-4 text-lg text-gray-500">${price}</p>
          </div>
          <div className=" flex flex-col container mx-auto lg:w-1/2">
            <h2 className=" hidden lg:block font-bold text-xl text-slate-800">
              Why Choose Our Chickens?
            </h2>
            <p className=" hidden lg:block text-gray-500">
              Our Chickens are raised with love, care, and attention. We prioritize
              their well-being and ensure they have the best possible
              environment to grow and thrive.
            </p>
            <button
              onClick={toggleModal}
              className="bg-slate-800 text-white py-2 px-4 rounded mt-4 hover:bg-blue-800"
            >
              Contact Us
            </button>
            <ContactModal modalOpen={modalOpen} toggleModal={toggleModal} />
          </div>
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
