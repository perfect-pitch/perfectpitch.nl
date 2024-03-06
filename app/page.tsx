/* eslint-disable @next/next/no-img-element */

export const runtime = 'edge';

export default function Home() {
  return (
    <main>
      <img
        src="/logo.jpg"
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
