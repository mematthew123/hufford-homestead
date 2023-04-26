import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Goats({ goats }) {
  const router = useRouter();
  const [mappedGoats, setMappedGoats] = useState([]);

  useEffect(() => {
    if (goats.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "er2tzasn",
        dataset: "production",
      });

      setMappedGoats(
        goats.map((g) => {
          return {
            ...g,
            image: imgBuilder.image(g.image).width(800).height(650),
          };
        })
      );
    } else {
      setMappedGoats([]);
    }
  }, [goats]);

  return (
    <div className="flex flex-col md:flex-row col-auto justify-between ">
      <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center justify-center ">
        <h1 className="font-extrabold text-gray-900">
          <p className="text-xl sm:text-3xl md:text-4xl">Hufford Homestead</p>
        </h1>
        <h3 className="text-xl sm:text-3xl md:text-4xl">Goats!</h3>

        <div className=" justify-center grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {mappedGoats.length ? (
            mappedGoats.map((g, index) => (
              <div
                onClick={() => router.push(`/goats/${g.slug.current}`)}
                key={index}
                className=" inline-grid justify-center rounded-lg shadow-lg bg-white p-8 hover:cursor-pointer "
              >
                <h3 className=" inline-grid font-bold text-xl text-slate-800 ">
                  {g.name}
                </h3>
                <img src={g.image} alt={g.name} />
                <p className="text-lg text-gray-500">Read More</p>
              </div>
            ))
          ) : (
            <>No Goats Yet</>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "goat" ]');
  const url = `https://er2tzasn.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        goats: [],
      },
    };
  } else {
    return {
      props: {
        goats: result.result,
      },
    };
  }
};
