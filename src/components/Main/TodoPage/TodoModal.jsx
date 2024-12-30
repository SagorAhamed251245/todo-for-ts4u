import { Box, Modal, Typography } from "@mui/material";
import React from "react";

export default function TodoModal({ setShowModal, showModal }) {
  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div>my modal</div>
        </Box>
      </Modal>
    </div>
  );
}
