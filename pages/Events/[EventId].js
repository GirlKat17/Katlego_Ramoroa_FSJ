import {useRouter} from 'next/router'
import EventSummary from './event-summary'
import {getEventById} from '../../dummy-data';
import { Fragment } from 'react';
import EventLogistics from './event-logistics'
import EventContent from './event-content'


function EventsDetailPage (){
    const router = useRouter();
   
    
    const eventId = router.query.EventId;
   const event = getEventById(eventId)

   if (!event){
    return <p> No event found!</p>
   }

    return(
     <Fragment>
        <EventSummary title= {event.title}/>
        <EventLogistics
             date={event.date} 
             address={event.location} 
             image={event.image} 
            imageAlt={event.title}
         />
          
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
     </Fragment>
    ); 
}

export default EventsDetailPage;