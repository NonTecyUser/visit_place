
// export default function Entry(props) {
//     return (<article className="journal-entry">
//         <div className="main-image-container">

//            < img className = "main-image" src ="./src/assets/mountFuji.png" 
//            alt = "mount-fuji-img"/>
//            <div className = "info-container">
//             <img className="location-icon" src="./src/assets/location-icon.png"
//              alt="location-icon"/>
//         </div>
//            </div>
              
//               <span className="country">Japan  </span>
//                 <a href="https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D">
                    
//                 View on Google Maps
                
//                 </a>
//                 <h2 className="entry-title">Mount Fuji</h2>
//                 <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
//                 <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        
//         </article>
//         )
//     }











// import Mtfuji from "../assets/mountFuji.png";
import locationIcon from "../assets/location-icon.png" 

export default function Entry(props) {
console.log(props);
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.image.src}
                    alt={props.image.alt}
                />
            </div>
            <div className="info-container">
                <div className= "location-info">
                <img 
                    className="marker"
                    src={locationIcon}
                    alt="location-icon"
                    />
                <span className="country">
                  {props.topDetail.country}</span>
                <a href={props.topDetail.mapLink}
                target="_blank"
                rel = "noopener noreferrer">
                View on Google Maps</a>
                    </div>

                <h2 className="entry-title">{props.title}</h2>

                <p className="trip-dates">{props.dates}</p>

                <p className="entry-text">{props.textInfo}</p>
            </div>
            
        </article>
    )
}