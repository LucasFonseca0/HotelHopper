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

const BookModal = ({
  isOpen,
  onClose
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


  return (
    <>
        {
            !singedIn && <AuthScreen setOpen={onClose}/>
        }
      {singedIn && (
        <Modal size={"2xl"} isOpen={isOpen} onClose={onClose} placement="center">
          <ModalContent className="bg-primary text-black">
            <ModalHeader className="flex flex-col gap-1">
              Book the room
            </ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod.
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
          </ModalContent>
        </Modal>
      )}

    </>

  );
};

export default BookModal;
