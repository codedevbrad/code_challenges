let calender1 = [ [ '10:00' , '10:30'] , ['11:00' , '11:30'] , [ '13:00' , '13:30' ] , [ '14:30' , '15:00' ]  ]  , 
    calender2 = [ [ '09:00' , '09:30'] , ['10:30' , '11:00'] , [ '13:00' , '13:30' ] , [ '16:00' , '16:30' ]  ];
    
 let dailyBounds1 = [ '08:00' , '18:00' ] , 
     dailyBounds2 = [ '09:00' , '19:00' ];
     
  // in future
     // make sure we test against meetings that start at odd times. not just 00 or 30 intervals.
     // we need to test within the range of 30 minutes from the start,

const availableDays = ( a , bounds ) => {
    
    const timeSlots = [ 06 , 07 , 08 , 09 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 ];
 
    let availableBetween = parseInt( bounds[0] ) - parseInt( bounds[1] );
    let possibleBookings = [  ];
    
    a = [].concat.apply([], a );
    
    const potential = timeSlots.filter(( 
    				each => each >= parseInt(bounds[0]) && 
                    each <= parseInt(bounds[1]) ));

    for ( let i = 0; i < potential.length; i++ ) {
					
         let hour  = ("0" + potential[i] ).slice(-2) + ':00';
         let half  = ("0" + potential[i] ).slice(-2) + ':30';
         if ( !a.includes( hour ) ) {
     	    possibleBookings.push(hour);
         } 
         if ( !a.includes( half ) && i < potential.length - 1 ) {
            possibleBookings.push(half);
         }
    }
    return possibleBookings;
}
function getFreeSlots () {

    let aPossible = availableDays( calender1 , dailyBounds1 );
    let bPossible = availableDays( calender2 , dailyBounds2 );
    console.log( aPossible , bPossible );

    return aPossible.filter( each => bPossible.includes( each ));
}

console.log( getFreeSlots() );


//
