import Link from 'next/link'
import Button from './components/ui/button';
import AddressIcon from './components/icons/address-icon'
import DataIcon from './components/icons/date-icon'
import Image from 'next/image';
import classes from './components/event-item.module.css'
import ArrowRightIcon from './components/icons/arrow-right-icon'


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
                            <AddressIcon/>
                            <address> {FormattedAddress }</address>
                        </div>
                    </div>
                    <div className={classes.action}>
                    <Button link={exploreLink} >
                        <span> Explore Event</span>
                        <span className={classes.icon}> <ArrowRightIcon/></span>
                    
                    
                    </Button>
                        
                    </div>
                </div>

            
            </li>
        </>
        
    )

}
export default EventItem