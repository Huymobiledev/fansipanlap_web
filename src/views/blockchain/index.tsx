import { Stack } from "@mui/material";
import { Fragment } from "react";
import WelcomeBlockchain from "./components/Welcome";
import Ecosystem from "./components/Our_Product";
import UIKey from "./components/UI_Key";
import NFTMarketPlace from "./components/NFT_Market";
import FooterBlockchain from "./components/Footer";

export default function ViewBlockChain() {
  return (
    <Fragment>
      <Stack
        direction={"column"}
        width={"100vw"}
        alignItems={"center"}
        sx={{
          display: "flex",
          position: "relative",
          backgroundColor: "#fff",
          overflowY: "scroll",
          overflowX: "hidden",
          height: "100vh",
          scrollBehavior: "smooth",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <WelcomeBlockchain/>
        <Ecosystem/>
        <UIKey/>
        <NFTMarketPlace/>
        <FooterBlockchain/>
      </Stack>
    </Fragment>
  );
}
