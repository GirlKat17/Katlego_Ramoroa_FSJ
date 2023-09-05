import Link from 'next/link'
import Button from './components/ui/button';
import Image from 'next/image';
import classes from './components/event-item.module.css'
function EventItem(props){
    const { title,image,date,location,id}= props;
    console.log(image)
    
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month: 'long',
        year:'numeric',
    })
    const FormattedAddress = location.replace(',','\n')
    const exploreLink = `/Events/${id}`;
    return (
        <>
            <li className={classes.item}>
              <Image src={'/' + image} alt={title} width={320} height={300}/>
                <div className={classes.content}>
                    <div className={classes.summary}>
                        <h2>{title} </h2>
                        <div className={classes.date}> 
                            <time> {humanReadableDate}</time>
                        </div>
                        <div className={classes.address}>
                            <address> {FormattedAddress }</address>
                        </div>
                    </div>
                    <div className={classes.action}>
                    <Button Link={exploreLink} >Explore Event
                    </Button>
                        
                    </div>
                </div>

            
            </li>
        </>
        
    )

}
export default EventItem