import React, { useEffect, useState } from "react";
import UserCard from "../component/UserCard";
import useDebpuncing from "../hooks/useDebounce";
function GithubUsersList() {
  const [card, setCard] = useState([]);
  const [query, setQuery] = useState("");

  const onQueryUpdate = useDebpuncing((e) => setQuery(e.target.value));
  const userList = async () => {
    try {
      const url = await fetch(
        `https://api.github.com/search/users?q=${query || "Diksha"}`
      );
      const res = await url.json();
      console.log(res);

      setCard(res.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userList();
  }, [query]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl font-semibold m-2 p-2">Github</h1>
      <input
        type="search"
        placeholder="Enter Github username"
        onChange={onQueryUpdate}
        className="text-center w-[50%] border-black border-2 p-2 m-2"
      />
      <div className="flex items-center justify-center flex-wrap gap-8">
        {card?.map((e) => {
          return <UserCard id={e.login} url={e.avatar_url} key={e.id} />;
        })}
      </div>
    </div>
  );
}

export default GithubUsersList;
