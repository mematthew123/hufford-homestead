import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Eggs({ egg }) {
  const router = useRouter();
  const [mappedEggs, setMappedEggs] = useState([]);

  useEffect(() => {
    if (egg.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "er2tzasn",
        dataset: "production",
      });

      setMappedEggs(
        egg.map((g) => {
          return {
            ...g,
            image: imgBuilder.image(g.image).width(800).height(650),
          };
        })
      );
    } else {
      setMappedEggs([]);
    }
  }, [egg]);

  return (
    <>
      <Head>
        <title>Eggs | Hufford Homestead</title>
        <meta name="description" content="Eggs | Hufford Homestead" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col md:flex-row col-auto justify-between ">
        <div className="min-h-screen bottom-6 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-24 text-center justify-center ">
          <h2 className="font-fraunces text-3xl tracking-tight text-slate-800 sm:text-4xl mb-4">
            {" "}
            Eggs
          </h2>
          <p className="text-xl text-gray-500 container pb-8 font-barlow line-clamp-6 leading-tight">
            {" "}
            Taste the difference of farm-fresh eggs! Our happy, healthy hens lay
            eggs with bright yolks and firm whites, perfect for your morning
            breakfast or your favorite baking recipe.
          </p>

          <div className=" pb-8 justify-center grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {mappedEggs.length ? (
              mappedEggs.map((g, index) => (
                <div
                  onClick={() => router.push(`/eggs/${g.slug.current}`)}
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
              <>Sold Out!</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "egg" ]');
  const url = `https://er2tzasn.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        egg: [],
      },
    };
  } else {
    return {
      props: {
        egg: result.result,
      },
    };
  }
};
