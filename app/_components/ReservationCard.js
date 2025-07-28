import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import DeleteReservation from './DeleteReservation';
import Image from 'next/image';

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className='flex flex-col sm:flex-row border border-primary-800 rounded-md overflow-hidden'>
      
      <div className='relative h-48 sm:h-auto sm:w-48 flex-shrink-0'>
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className='object-cover border-b sm:border-b-0 sm:border-r border-primary-800'
          sizes="(max-width: 640px) 100vw, 192px"
        />
      </div>

  
      <div className='flex-grow px-6 py-4 flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-2 flex-wrap'>
          <h3 className='text-lg sm:text-xl font-semibold'>
            {numNights} nights in Cabin {name}
          </h3>
          <span
            className={`h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm ${
              isPast(new Date(startDate))
                ? 'bg-yellow-800 text-yellow-200'
                : 'bg-green-800 text-green-200'
            }`}
          >
            {isPast(new Date(startDate)) ? 'Past' : 'Upcoming'}
          </span>
        </div>

        <p className='text-sm sm:text-lg text-primary-300'>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>

        <div className='flex flex-wrap gap-3 sm:gap-5 mt-auto items-baseline text-sm sm:text-base'>
          <p className='text-lg font-semibold text-accent-400'>${totalPrice}</p>
          <p className='text-primary-300'>&bull;</p>
          <p className='text-primary-300'>
            {numGuests} guest{numGuests > 1 && 's'}
          </p>
          <p className='ml-auto text-sm text-primary-400 w-full sm:w-auto'>
            Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>
      </div>

    
      <div className='flex sm:flex-col border-t sm:border-t-0 sm:border-l border-primary-800 w-full sm:w-[100px]'>
        <a
          href={`/account/reservations/edit/${id}`}
          className='group flex items-center justify-center gap-2 uppercase text-xs font-bold text-primary-300 border-r sm:border-b sm:border-r-0 border-primary-800 flex-grow px-3 py-2 hover:bg-accent-600 transition-colors hover:text-primary-900'
        >
          <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
          <span>Edit</span>
        </a>
        <DeleteReservation bookingId={id} />
      </div>
    </div>
  );
}

export default ReservationCard;
