import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import useUser from "@/src/hooks/useUser";
import AuthScreen from "@/src/screens/AuthScreen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const BookModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [singedIn, setSingedIn] = useState(false);
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading) {
      setSingedIn(!!user);
    }
    if (user) {
      setSingedIn(true);
    }
  }, [loading, user, isOpen]);

  useEffect(() => {}, [user]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    console.log(dates);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      {!singedIn && <AuthScreen setOpen={onClose} />}
      {singedIn && (
        <Modal
          size={"2xl"}
          isOpen={isOpen}
          onClose={onClose}
          placement="center"
        >
          <ModalContent className="bg-primary text-black">
            <ModalHeader className="flex flex-col gap-1">
              Book the room
            </ModalHeader>
            <ModalBody>
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                selectsRange
                selectsDisabledDaysInRange
                inline
                
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BookModal;
