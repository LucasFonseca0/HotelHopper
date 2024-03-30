interface Room {
    room_number:string
    type:string
    price:number
    amenities ?: string[]
    capacity: number
    imagesURI?:string[]
    description: string
}

interface Hotel {
    _id: string;
    name: string;
    rating: number;
    country:string
    city: string;
    rooms: Room[];
    user:string 
  }