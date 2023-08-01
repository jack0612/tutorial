export interface BookedPickup {
    date: string;
    time: string;
    address: string;
    location: string;
    instruction: string;
  }
  
  export class BookedPickupsDto {
    bookedPickups: BookedPickup[]=[];
    preferedBookedPickupIndex: number=0
  }