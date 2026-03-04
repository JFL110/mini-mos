import {
	defineWorkersConfig,
	readD1Migrations,
} from "@cloudflare/vitest-pool-workers/config";

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				wrangler: { configPath: "./wrangler.jsonc" },
				miniflare: {
					bindings: {
						TEST_MIGRATIONS: await readD1Migrations("./migrations"),
					},
				},
			},
		},
	},
});
