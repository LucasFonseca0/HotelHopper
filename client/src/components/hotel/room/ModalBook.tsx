import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import useUser from "@/src/hooks/useUser";
import AuthScreen from "@/src/screens/AuthScreen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInDays, format } from "date-fns";

const BookModal = ({
  isOpen,
  onClose,
  roomPrice,
  submitBook,
  setPostOrderInformations,
  postOrderInformations
}: {
  isOpen: boolean;
  onClose: () => void;
  roomPrice: number;
  submitBook:(data:OrderPost)=>void
  setPostOrderInformations:Function,
  postOrderInformations: OrderPost
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { user, loading } = useUser();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (!loading) {
      setIsSignedIn(!!user);
    }
  }, [loading, user]);

  const onChange = (dates:any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end || start);

    setPostOrderInformations((prev:OrderPost) => ({
      ...prev,
      Date: dates || []
    }));
  };

  const totalDays = endDate ? differenceInDays(endDate, startDate) + 1 : 1;
  const totalPrice = roomPrice * totalDays;
  const firstNight = format(startDate, "yyyy-MM-dd");
  const lastNight = endDate ? format(endDate, "yyyy-MM-dd") : firstNight;

  return (
    <>
      {!isSignedIn && <AuthScreen setOpen={onClose} />}
      {isSignedIn && (
        <Modal size="2xl" isOpen={isOpen} onClose={onClose} placement="center">
          <ModalContent className="bg-primary text-black">
            <ModalHeader className="flex flex-col gap-1">Book the room</ModalHeader>
            <ModalBody className="flex flex-col items-center sm:flex-row">
              <div>
                <h2 className="font-semibold">Select the date</h2>
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
              </div>
              <aside className="[&>p>span]:font-bold  flex flex-col sm:gap-5">
                <p><span>Check-in:</span> {firstNight}</p>
                <p><span>Check-out (morning):</span> {lastNight}</p>
                <p><span>Price:</span> €{totalPrice}</p>
              </aside>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>Close</Button>
              <Button color="secondary" onPress={() => submitBook(postOrderInformations)}>Book</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BookModal;
