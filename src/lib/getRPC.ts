const RPC_LIST_ETH = [
	"https://eth.llamarpc.com",
	"https://eth.public-rpc.com",
	"https://rpc.builder0x69.io",
	"https://eth-mainnet.g.alchemy.com/v2/QWnDJnnZFRJSZABxedDHL1l1x2Y3c1aR",
];

export const getRPC = (chainId: number) => {
	let randomRPC;
	if (chainId == 1) {
		randomRPC = RPC_LIST_ETH[Math.floor(Math.random() * RPC_LIST_ETH.length)];
	}
	return randomRPC?.toString();
};
