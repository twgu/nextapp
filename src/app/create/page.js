"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const body = event.target.body.value;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    };
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "/topics", options);
    const result = await resp.json();
    // console.log(result);

    const lastid = result.id;

    router.push(`/read/${lastid}`);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>

      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
