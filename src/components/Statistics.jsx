const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}

        {/* <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{ stats.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{ stats.percentage}</span>
    </li>
    <li className="item">
      <span className="label">{stats.label}</span>
      <span className="percentage">{ stats.percentage}</span>
    </li> */}
      </ul>
    </section>
  );
};

export default Statistics;
