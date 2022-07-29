import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';
import express from 'express';

const config: HardhatUserConfig = {
  solidity: "0.8.9",
};

export default config;
