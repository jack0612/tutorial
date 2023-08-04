export interface BookedPickup {
    date: string;
    time: string;
    address: string;
    location: string;
    instruction: string;
  }
  
  export interface BookedPickupsDto {
    bookedPickups: BookedPickup[];
    preferedBookedPickupIndex: number
  }