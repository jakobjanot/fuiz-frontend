export type Stats = {
	openSource: number;
	design: number;
	lightweight: number;
	privacy: number;
};

export async function getStats(_platform?: unknown): Promise<Stats> {
	return {
		openSource: 0,
		design: 0,
		lightweight: 0,
		privacy: 0
	};
}

export async function setStats(_platform: unknown, _stats: Stats): Promise<void> {
	// no-op
}

export async function getGamesPlayed(_platform?: unknown): Promise<number | undefined> {
	return undefined;
}

export async function getPlayersJoined(_platform?: unknown): Promise<number | undefined> {
	return undefined;
}
