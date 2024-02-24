import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-500 text-white text-center m-4 text-3xl p-4">
      Github: {data.followers}
      <img src={data.avatar_url} alt="GitPicture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const res = await fetch("https://api.github.com/users/shreyashbachate");
  return res.json();
};
