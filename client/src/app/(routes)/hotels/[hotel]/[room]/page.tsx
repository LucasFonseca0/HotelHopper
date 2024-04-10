"use client"

import { getRoomByID } from "@/src/api/hotelAPI";
import { createOrder } from "@/src/api/orderAPI";
import CarouselImage from "@/src/components/hotel/room/CarouselImage";
import BookModal from "@/src/components/hotel/room/ModalBook";
import Header from "@/src/components/Layout/Header";
import LoadingSpinner from "@/src/shared/Loading/LoadingSpinner";
import styles from "@/src/utils/style";
import { Button, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = ({ params }: { params: { hotel: string; room: string } }) => {
  const [roomDetails, setRoomDetails] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postOrderInformations,setPostOrderInformations] = useState<OrderPost>({
    Date:[],
    hotel:params.hotel,
    room_number:params.room
  })

  const handleOpen = () => {
    setPostOrderInformations((prev:OrderPost) => {
      return {...prev, Date: []}
    })
    onOpen();
  };

  useEffect(() => {
    const fetchRoom = async () => {
      setIsLoading(true);
      try {
        const room = await getRoomByID(params.hotel, params.room);
        setRoomDetails(room);
      } catch (error) {
        console.error("Error fetching room:", error);
      }
      setIsLoading(false);
    };

    fetchRoom();
  }, [, params.hotel, params.room]);



  const submitBook = async (data:OrderPost)=>{
    if(data && data.Date && data.Date.length <=0){
      toast.error("Select a data range")
      return
    }
    
    try {
      const tryCreateOrder = await createOrder(postOrderInformations)
      if(tryCreateOrder){
        toast.success("Booking successful!")
      }
      onClose()
    } catch (error:any) {
      toast.error(error.response.data.message);
    }
}


  return (
    <>
      <Header />
      <div className="p-2 sm:p-4 md:p-8 flex justify-center items-center w-full">
        <div className="bg-white rounded-lg p-3 max-w-[1520px]">
          {isLoading && <LoadingSpinner />}
          {roomDetails && (
            <>
              <Button
                className={`${styles.button} max-w-[30%]`}
                onClick={() => window.history.back()}
              >
                <IoMdArrowRoundBack />
                Back
              </Button>
              <h2 className="text-secondary font-bold flex justify-center items-center m-2 text-xl sm:text-2xl md:text-3xl">
                Room Details
              </h2>
              <div className="text-black flex flex-col gap-4 sm:text-xl md:text-2xl">
                {roomDetails.imagesURI && (
                  <CarouselImage imagesURI={roomDetails.imagesURI} />
                )}
                <h2>
                  <span className="font-bold">Type:</span> {roomDetails.type}
                </h2>
                <p>
                  <span className="font-bold">Capacity:</span>{" "}
                  {roomDetails.capacity}
                </p>
                {roomDetails?.amenities && (
                  <p className="text-wrap">
                    <span className="font-bold">Amenities:</span>{" "}
                    {roomDetails.amenities.map((data,index) => `${index>0 ? ",":""}${data}`)}
                  </p>
                )}
                <p>
                  <span className="font-bold">Description:</span>{" "}
                  {roomDetails.description}
                </p>
                <p>
                  <span className="font-bold">Price:</span> €{roomDetails.price}{" "}
                  per night
                </p>
                <Button
                  className={`${styles.button} bg-secondary text-2xl sm:text-3xl md:text-4xl`}
                  onPress={() => handleOpen()}
                >
                  Book Now
                </Button>
              </div>
            </>
          )}
          {isOpen && roomDetails && (
            <BookModal
              roomPrice={roomDetails.price}
              isOpen={isOpen}
              onClose={onClose}
              submitBook={submitBook}
              setPostOrderInformations={setPostOrderInformations}
              postOrderInformations={postOrderInformations}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
