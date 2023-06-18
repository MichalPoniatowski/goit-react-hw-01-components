import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload {title}</h2>

      <ul className={css.stat_list}>
        {stats.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <span className={css.label}>.{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
