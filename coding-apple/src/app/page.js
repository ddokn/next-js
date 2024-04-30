import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <Image src="/download.png" width={100} height={100}/>
    </>
  );
}
