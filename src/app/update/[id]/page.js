"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const options = { cache: "no-store" };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${params.id}`, options)
      .then((resp) => resp.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const body = event.target.body.value;

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    };
    const resp = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/topics/" + params.id,
      options
    );
    const result = await resp.json();
    // console.log(result);

    const lastid = result.id;

    router.push(`/read/${lastid}`);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
      </p>

      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
