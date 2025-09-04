import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CounterButton from "./CounterButton";
import LikeButton from "./LikeButton";
import ShowHideText from "./ShowHideText";
import Parent from "./DynamicList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CounterButton/> */}
    {/* <LikeButton/> */}
    {/* <ShowHideText/> */}
    <Parent/>
  </StrictMode>
);
