
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";

export const Chickens = ({ chicken }) => {
  const { name, body, image,price,breed } = chicken;

  const [imageUrl, setImageUrl] = useState("");

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
        {imageUrl && <img className={image} src={imageUrl} />}

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
