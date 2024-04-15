interface OrderPost{
    hotel:string
    room_number: string
    Date:Date[]
}

interface Order {
    _id:string
    hoteL:Hotel
    room_number:string
}

interface OrderPopulated{
    _id:string
    room_number:string
    hotel:Hotel
    Date:Date[]
    user:UserInfo
}