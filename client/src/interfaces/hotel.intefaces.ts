interface Hotel {
    _id: string;
    name: string;
    rating: number;
    country:string
    city: string;
    rooms: Room[];
    user:string 
  }
  
  interface Room {
    room_number: number;
    amenities?: string[]
    capacity:number
    type: string;
    description: string;
    price: number;
  }