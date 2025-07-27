import Counter from "../_components/Counter";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return (
    <div>
      <h1>Cabins Page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter />
    </div>
  );
};

export default Page;
