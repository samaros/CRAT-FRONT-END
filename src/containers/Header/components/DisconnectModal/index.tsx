import { Modal, Text, Button } from 'components';
import React, { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean,
  onClose: () => void,
};

const DisconnectModal: FC<Props> = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={styles.container}
  >
    <Text align="center" color="green">If you want to disconnect your wallet please delete</Text>
    <Text align="center" color="green"><span className={styles.blackText}>cratprotocol.io</span> from connected sites in MetaMask</Text>
    <Button className={styles.okDisconnect} onClick={onClose} color="green">
      <Text weight="bold" size="l" color="white">OK</Text>
    </Button>
  </Modal>
);

export default DisconnectModal;
