import * as Logo from "./logo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <img
        src='/logo.jpg'
        alt="logo"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block",
          width: "auto",
          height: "auto",
        }}
      />
    </main>
  );
}
