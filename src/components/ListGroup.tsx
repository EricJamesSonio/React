function ListGroup() {
  const items = ["Bulacan", "Tarlac", "Manila", "Cebu", "Baguio"];

  return (
    <>
      <h2>LIST OF GROUPS</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
