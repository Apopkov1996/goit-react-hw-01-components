import statcss from './statistics.module.css';

import PropTypes from 'prop-types';

export const Statistics = ({
  title = 'Here must be Title',
  dataStatistics,
}) => {
  return (
    <section className={statcss.statistics}>
      <h2 className={statcss.title}>{title}</h2>

      <ul className={statcss.list}>
        {dataStatistics.map(({ id, label, percentage }) => (
          <li className={statcss.item} key={id}>
            <span className={statcss.label}>{label}</span>
            <span className={statcss.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  dataStatistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
