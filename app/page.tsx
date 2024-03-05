import * as Logo from "@/public/logo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src={Logo}
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
