import React, { useContext } from "react";
import { Context } from "../context/Context";

function Followers(props) {
    const {followers} = useContext(Context);
  return (
    <div>
      {
      followers.map((follower, index) => {
        const { avatar_url: img, html_url, login } = follower;
        return (
          <article key={index}>
            <img src={img} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>{html_url}</a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Followers;
