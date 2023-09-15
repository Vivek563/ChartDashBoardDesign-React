

const Card = ({icon,title,price,percentage}) => {
  return (
    
            <div className="card">
                <div className='t-revenues'>
                    <div><img src={`${icon}`} alt="" srcSet="" /></div>
                    <p>{title}</p>
                </div>                
                <div className='revenue'>
                    <p>{price}</p>
                    <span>{percentage}</span>
                </div>               
            </div>
        
  )
}

export default Card
