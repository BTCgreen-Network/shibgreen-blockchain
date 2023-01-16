type OfferBuilderData = {
  offered: {
    xshib: {
      amount: string;
    }[];
    tokens: {
      amount: string;
      assetId: string;
    }[];
    nfts: {
      nftId: string;
    }[];
    fee: {
      amount: string;
    }[];
  };
  requested: {
    xshib: {
      amount: string;
    }[];
    tokens: {
      amount: string;
      assetId: string;
    }[];
    nfts: {
      nftId: string;
    }[];
    fee: {
      amount: string;
    }[];
  };
};

export default OfferBuilderData;
