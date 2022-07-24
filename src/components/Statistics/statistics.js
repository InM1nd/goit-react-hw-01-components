import PropTypes from 'prop-types';
import style from './statistics.module.css';

function Statistics({title, stats}) {
    return (
  <section className={style.statistics}>
  {title && <h2 className={style.title}>{title}</h2>}
  <ul className={style.statList}>
    {stats.map(({id, label, percentage}) => (
      <li 
      className={style.item}
      key={id}
      style= {{backgroundColor:getRandomColor() }}
      >
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
    ))}
  </ul>
  </section>
    );
}


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default Statistics;


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };
