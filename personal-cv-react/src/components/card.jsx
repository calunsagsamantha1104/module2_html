
function Card({ title, children }) {
  return (
    <section className="Card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Card;
