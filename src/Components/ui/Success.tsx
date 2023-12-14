import { Box, Typography } from "@mui/material";
import successImage from "../../assets/success-image.svg";
import closeImage from "../../assets/close-image.svg";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { ModalContext, StateModal } from "../../Context/ModalContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const Success = () => {
  const { open, setOpen } = useContext(ModalContext) as StateModal;

  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img
          src={closeImage}
          alt="Close Modal"
          onClick={handleClose}
          style={{
            width: "16px",
            height: "16px",
            position: "absolute",
            right: "16px",
            top: "16px",
          }}
        />
        <Typography variant="subtitle1" mb={"50px"}>
          User successfully registered
        </Typography>
        <img src={successImage} alt="User successfully registered" />
      </Box>
    </Modal>
  );
};

export default Success;
