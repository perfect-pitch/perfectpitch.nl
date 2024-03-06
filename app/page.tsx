/* eslint-disable @next/next/no-img-element */

export const runtime = "edge";

export default function Home() {
  return (
    <main>
      <div className="container">
        <img src="/logo.jpg" alt="logo" />
      </div>
    </main>
  );
}
