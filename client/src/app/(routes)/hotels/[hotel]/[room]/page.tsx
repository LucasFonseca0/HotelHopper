"use client";

import { getRoomByID } from "@/src/api/hotelAPI";
import CarouselImage from "@/src/components/hotel/room/CarouselImage";
import Header from "@/src/shared/Layout/Header";
import LoadingSpinner from "@/src/shared/Loading/LoadingSpinner";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { hotel: string; room: string } }) => {
  const [roomDetails, setRoomDetails] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const handleOpen = () => {
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

  return (
    <>
      <Header />
      <div className="p-2 flex justify-center items-center">
        <div className="bg-white rounded-lg p-3 max-w-[1520px]">
          <h2 className="text-secondary font-bold flex justify-center items-center m-2 text-xl sm:text-2xl md:text-3xl">
            Room Details
          </h2>
          {isLoading && <LoadingSpinner />}
          {roomDetails && (
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
                  {roomDetails.amenities.map((data) => `${data} `)}
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
                className="bg-secondary text-white font-bold text-3xl"
                onPress={() => handleOpen()}
              >
                Book Now
              </Button>
            </div>
          )}
          {isOpen && (
            <Modal size={"2xl"} isOpen={isOpen} onClose={onClose} placement="center">
              <ModalContent className=" bg-primary text-black">
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Book the room
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
