"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control(props) {
  const params = useParams();
  const router = useRouter();

  const onClickhandler = async () => {
    const options = { method: "DELETE" };
    await fetch(process.env.NEXT_PUBLIC_API_URL + "/topics/" + params.id, options);

    router.push("/");
    router.refresh();
  };

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {params.id ? (
        <>
          <li>
            <Link href={"/update/" + params.id}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={onClickhandler}
            ></input>
          </li>
        </>
      ) : null}
    </ul>
  );
}
