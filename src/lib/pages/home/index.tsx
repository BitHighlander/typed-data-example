import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Text,
  Select,
  useDisclosure,
  Modal,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import {
  usePioneer,
  AssetSelect,
  BlockchainSelect,
  WalletSelect,
  // @ts-ignore
} from "@pioneer-platform/pioneer-react";
import { EXAMPLE_TX_OPENSEA, EXAMPLE_TX_UNISWAP } from "./data";

const Home = () => {
  const { state } = usePioneer();
  const { api, app, context, assetContext, blockchainContext, pubkeyContext } =
    state;
  const [address, setAddress] = useState("");
  const [recoverAddress, setRecoverAddress] = useState("");
  const [modalType, setModalType] = useState("");
  const [signedTx, setSignedTx] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedExampleTx, setSelectedExampleTx] =
    useState(EXAMPLE_TX_UNISWAP);

  const isAddressValid = recoverAddress === address;

  useEffect(() => {
    setAddress(pubkeyContext.master || pubkeyContext.pubkey);
  }, [pubkeyContext]);

  const openModal = (type: React.SetStateAction<string>) => {
    setModalType(type);
    onOpen();
  };

  const signTx = async () => {
    try {
      const EXAMPLE_TX = selectedExampleTx;
      //
      const walletContext = app.wallets.filter(
        (wallet: { context: any }) => wallet.context === context
      );
      console.log("walletContext: ", walletContext[0]);
      console.log("walletContext: ", walletContext[0].wallet);

      //sign tx
      const payload = {
        typedData: EXAMPLE_TX,
        addressNList: [0x80000000 + 44, 0x80000000 + 60, 0x80000000 + 0, 0, 0],
      };
      const signedTx = await walletContext[0].wallet.ethSignTypedData(payload);
      console.log("signedTx: ", signedTx);
      setSignedTx(signedTx.signature);

      //https://eips.ethereum.org/EIPS/eip-712

      //recover
      const expectedSignerAddress = address;
      // console.log("ethers: ", ethers);
      // @ts-ignore
      delete EXAMPLE_TX.types.EIP712Domain;
      // @ts-ignore
      const recoveredAddress = ethers.verifyTypedData(
        EXAMPLE_TX.domain,
        EXAMPLE_TX.types,
        EXAMPLE_TX.message,
        signedTx.signature
      );
      setRecoverAddress(recoveredAddress);
      console.log("expected: ", expectedSignerAddress);
      console.log("recovered: ", recoveredAddress);
      console.log(recoveredAddress === expectedSignerAddress);
    } catch (e) {
      console.error(e);
    }
  };

  const handleExampleTxSelect = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value;
    if (selectedValue === "opensea") {
      // @ts-ignore
      setSelectedExampleTx(EXAMPLE_TX_OPENSEA);
    } else {
      setSelectedExampleTx(EXAMPLE_TX_UNISWAP);
    }
  };

  // @ts-ignore
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      {" "}
      <div>
        <p>
          <h2><a href="https://eips.ethereum.org/EIPS/eip-712">Spec: EIP-712: {" "}LINK</a></h2>
        </p>
      </div>
      <br/>
      <Box borderWidth="1px" borderRadius="lg" p={4} marginBottom={4}>
        <Text>Context: {context}</Text>
        <Text as="h1" fontSize="2xl">
          Address: {pubkeyContext?.master || pubkeyContext?.pubkey}
        </Text>
      </Box>
      <Select
        value={selectedExampleTx === EXAMPLE_TX_OPENSEA ? "opensea" : "uniswap"}
        onChange={handleExampleTxSelect}
        marginBottom={4}
      >
        <option value="opensea">OpenSea Example Tx</option>
        <option value="uniswap">Uniswap Example Tx</option>
      </Select>
      <Box borderWidth="1px" borderRadius="lg" p={4} marginBottom={4}>
        <Text fontSize="xl">Transaction:</Text>
        <pre>{JSON.stringify(selectedExampleTx, null, 2)}</pre>
      </Box>
      <Button onClick={signTx} colorScheme="teal" marginBottom={4}>
        Sign
      </Button>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontSize="xl">Signature:</Text>
        <pre>{JSON.stringify(signedTx, null, 2)}</pre>
      </Box>
      {recoverAddress ? (
        <div
          style={{
            border: isAddressValid ? "1px solid green" : "1px solid red",
            borderRadius: "lg",
            padding: "16px",
          }}
        >
          <div style={{ fontSize: "xl" }}>Recovered Address:</div>
          <pre>{recoverAddress}</pre>
        </div>
      ) : null}
      {recoverAddress && isAddressValid ? (
        <span style={{ color: "green" }}>✅</span>
      ) : recoverAddress ? (
        <div style={{ color: "red" }}>Invalid Signature</div>
      ) : null}
    </Box>
  );
};

export default Home;
