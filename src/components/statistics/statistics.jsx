import PropTypes from 'prop-types'
import statsCss from './statistics.module.css'


export const Statistics = ({title, stats}) => {
    return (
<section className={statsCss.statistics}>
  {title && <h2 className={statsCss.title}>{title}</h2>}

  <ul className={statsCss.list}>
    {stats.map(stat => (
      
    <li className={statsCss.item}
       key = {stat.id}>
    <span className={statsCss.label}>{stat.label}</span>
    <span className={statsCss.percentage}>{stat.percentage}%</span>
  </li>))}
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };