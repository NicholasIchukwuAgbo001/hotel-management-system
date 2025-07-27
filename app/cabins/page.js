const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const data = await res.json();

  console.log(data)

  return (
    <div>
      <h1>Cabins Page</h1>
    </div>
  )
}

export default Page
