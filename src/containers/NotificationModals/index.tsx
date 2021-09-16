/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import cx from 'classnames';
import {
  Link, Modal, Text, Button,
} from 'components';
import { NotificationModalObjectHelper } from 'types';
import { Pending, Reject, Success } from 'assets/img';
import styles from './styles.module.scss';

const modalHelperObject: NotificationModalObjectHelper = {
  approve: {
    pending: {
      title1: 'STEP 1 /2 ',
      title2: 'APPROVE',
      image: Pending,
      title3: 'PLEASE PRESS “APPROVE” BUTTON IN METAMASK EXTENSION',
      body1: 'ERC20 tokens are deployed with functionality that allows other smart contracts to move tokens.',
      body2: 'By approving the smart contracts, it now has permission to execute the peer to peer swapping behavior on your behalf.',
      body3: 'The Spend Limit permission is the total amount of tokens that are able to move when using MetaMask Swap.',
    },
    success: {
      title1: 'STEP 1 /2 ',
      title2: 'APPROVE',
      image: Success,
      title3: 'APPROVED SUCCESSFULLY. NEXT STEP...',
      body1: 'ERC20 tokens are deployed with functionality that allows other smart contracts to move tokens.',
      body2: 'By approving the smart contracts, it now has permission to execute the peer to peer swapping behavior on your behalf.',
      body3: 'The Spend Limit permission is the total amount of tokens that are able to move when using MetaMask Swap.',
    },
    reject: {
      title1: 'STEP 1 /2 ',
      title2: 'APPROVE',
      image: Reject,
      title3: 'YOU REJECTED APPROVE TRANSACTION IN METAMASK. PRESS APPROVE AGAIN TO START OVER OR CLOSE THIS WINDOW.',
    },
  },
  send: {
    pending: {
      title1: 'STEP 2 /2 ',
      title2: 'SEND',
      image: Pending,
      title3: 'PLEASE PRESS “SEND” BUTTON IN METAMASK EXTENSION',
      body1: 'Your ETH will be transferred from your wallet to the contract address',
    },
    success: {
      title1: 'STEP 2 /2 ',
      title2: 'SEND',
      image: Success,
      title3: 'SENT',
      body1: 'It takes some time for transaction to get confirmed.',
    },
    reject: {
      title1: 'STEP 2 /2 ',
      title2: 'SEND',
      image: Reject,
      title3: 'YOU REJECTED SEND TRANSACTION IN METAMASK. PRESS SEND AGAIN TO START OVER OR CLOSE THIS WINDOW.',
    },
  },
};

type Props = {
  className?: string
  isOpen: boolean,
  onClose: () => void,
  type: string,
  result: string,
  transactionHash: string,
};

const NotificationModal: FC<Props> = ({
  className, isOpen, onClose, type, result, transactionHash,
}) => {
  const helperObj = modalHelperObject[type][result];
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cx(styles.container, className)}
    >
      <Text size="xl" color="green">{helperObj.title1}<span className={styles.blackText}>{helperObj.title2}</span></Text>
      <div className={styles.whiteCircle}>
        <img className={styles[result]} src={helperObj.image} alt="" />
        {result !== 'success' && <Text>{result.toUpperCase()}</Text>}
      </div>
      <Text size="xl" color="green">{helperObj.title3}</Text>
      <Text className={styles.instructions}>
        {helperObj?.body1}
      </Text>
      <Text className={styles.instructions}>
        {helperObj?.body2}
      </Text>
      <Text className={styles.instructions}>
        {helperObj?.body3}
      </Text>
      {result === 'success' && (
        <Button className={styles.scannerBtn} color="green">
          <Link external name="See on scanner" link={`https://testnet.bscscan.com/tx/${transactionHash}`} />
        </Button>
      )}
      {/* {result === 'reject' && (
        <Button color="green" className={styles.againBtn}>
          <Text size="l" weight="bold" color="white">{`${type} again`}</Text>
        </Button>
      )} */}
    </Modal>
  );
};

export default NotificationModal;
