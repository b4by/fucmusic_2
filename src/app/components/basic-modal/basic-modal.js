import Link from "next/link";
import { useRouter } from "next/router";

export const BasicModal = () => {
  const router = useRouter();
  return (
    <div id="modal">
      <h1>Title</h1>
      <p>Body</p>
      <Link href="/">Ok</Link>
    </div>
  );
};
