export default function Card(props)
{
    const {item}=props;
    return(
        <div className='card'>
            <div className="part1">
                <img alt="item" src={`${item.imageUrl}`}className='card--image'/>
            </div>
            <div className="part2">
                <ul>
                    <li><img alt="location" className="location--img" src={require('../pictures/location.png')}/></li>
                    <li className="location--text">{item.location}</li>
                    <li className="map"><a href={item.googleMapsUrl}>View on Google Maps</a></li>
                </ul>
                <h1 className="card--title">{item.title}</h1>
                <span className="date">{item.startDate} - {item.endDate}</span>
                <p>{item.description}</p>
            </div>
        </div>
    )
}