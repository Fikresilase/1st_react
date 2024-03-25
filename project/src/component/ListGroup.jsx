function List() {
  let cities = [];

  if (cities.length ===0) {
    return <h1>nonono</h1>;
  }

  return (
    <>
      <h1>List</h1>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
