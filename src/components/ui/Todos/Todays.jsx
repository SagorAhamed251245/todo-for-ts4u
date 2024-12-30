const Todays = ({ todos }) => {
  const filterTodo = todos?.filter((item) => item?.status == "pending");
  console.log({ filterTodo });
  return (
    <div>
      {filterTodo?.map((todo, i) => (
        <div key={i}>
          <p>name: {todo?.name}</p>
          <p>date: {todo?.date}</p>
          <p>status: {todo?.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Todays;
