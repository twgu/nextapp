export default async function Read(props) {
  const options = { cache: "no-store" };
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${props.params.id}`, options);
  const result = await resp.json();

  return (
    <>
      <h2>{result.title}</h2>
      {result.body}
    </>
  );
}
