import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xaE587352824C5B46CB7693D9F16dF4A3F8b1Ed18"
);

export default instance;
