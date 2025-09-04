import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
    function clickHandler(){
        setLiked(v => !v)
    }
  return (
    <button onClick={clickHandler}>{liked ? <AiFillHeart color="red"/> : <AiOutlineHeart/>}</button>
  );
}
