import {useRouter} from 'next/router'
import EventSummary from '../Events/event-detail/event-summary'
import {getEventById} from '../../dummy-data';
import { Fragment } from 'react';
import EventLogistics from '../Events/'
import EventContent from '../../'


function EventsDetailPage (){
    const router = useRouter();;;
    
    const eventId= router.query.eventId;
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

export default EventsDetailPage