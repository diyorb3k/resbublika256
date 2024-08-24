"use client"; // Bu qatorda komponentni "Client Component" sifatida belgilash

import { useEffect, useState } from "react";

type Wait = {
  name: {
    official: string;
    common: string;
  };
  region: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  maps: {
    googleMaps: string;
  };
  capitalInfo: {
    latlng: number[];
  };
  capital: string;
};

const Counterisdata = () => {
  const [posts, setPosts] = useState<Wait[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Wait[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data: Wait[] = await res.json();
        setPosts(data);
        setFilteredPosts(data); // Dastlabki qiymatni filtrlangan ro'yxatga qo'shamiz
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Qidiruv natijalarini yangilash
  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, posts]);

  return (
    <div className="container mx-auto font-nunito z-[0px] pt-[100px]">
      {/* Input va Select qismi */}
      <div className="flex-wrap mb-[48px] flex justify-between mt-[48px]">
        <input
          className="shadow-sm w-[480px] border border[red] border-gray-300 rounded-[4px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search for a country…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="w-[200px] py-[9px] border border-gray-300 rounded-[4px]">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {/* Ma'lumotlarni ko'rsatish qismi */}
      <div className="flex flex-wrap justify-between">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post: Wait, index: number) => (
            <div key={index} className="m-0 mb-4 border rounded-[4px] border[red] w-[264px]">
              <img
                src={post.flags.svg}
                alt={`${post.name.common} flag`}
                className="mt-[0px] w-[267px] h-[160px] mt-2"
              />
              <p className="font-bold text-lg px-[24px]">{post.name.common}</p>
              <p className="text-sm text-gray-500 mt-1 px-[24px]">Region: {post.region}</p>
              <p className="text-sm text-gray-500 px-[24px]">Population: {post.population.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1 px-[24px]">Capital: {post.capital}</p>
              <a
                href={post.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 block px-[24px] no-underline"
              >
                xaritada
              </a>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default Counterisdata;
