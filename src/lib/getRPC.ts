const RPC_LIST_ETH = [
	"https://eth.llamarpc.com",
	"https://ethereumnodes.com/",
	"https://eth.public-rpc.com",
	"https://api.zan.top/node/v1/eth/mainnet/public",
	"https://eth-pokt.nodies.app",
	"https://rpc.builder0x69.io",
];

export const getRPC = (chainId: number) => {
	let randomRPC;
	if (chainId == 1) {
		randomRPC = RPC_LIST_ETH[Math.floor(Math.random() * RPC_LIST_ETH.length)];
	}
	return randomRPC?.toString();
};