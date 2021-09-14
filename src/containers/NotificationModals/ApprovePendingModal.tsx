import React, { FC } from 'react';
import cx from 'classnames';
import { Modal, Text } from 'components';
import styles from './styles.module.scss';

type Props = {
  className?: string
  isOpen: boolean,
  onClose: () => void,
};

const ApprovePendingModal: FC<Props> = ({ className, isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={cx(styles.container, className)}
  >
    <Text size="xl" color="green">STEP 1 /2 <span className={styles.blackText}>APPROVE</span></Text>
    <div className={styles.whiteCircle} />
    <Text size="xl" color="green">PLEASE PRESS “APPROVE” BUTTON IN METAMASK EXTENSION</Text>
    <Text className={styles.instructions}>
      BEP20 tokens are deployed with functionality that allows other smart contracts to move tokens.
    </Text>
    <Text>By approving the smart contracts,it now has permission to execute the peer
    </Text>
    <Text>to peer swapping behavior on your behalf.
    </Text>
    <Text>The Spend Limit permission is the total amount of tokens that are able
    </Text>
    <Text>to move when using MetaMask Swap.</Text>
  </Modal>
);

export default ApprovePendingModal;
