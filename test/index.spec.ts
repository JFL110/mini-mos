import { applyD1Migrations, env, SELF } from "cloudflare:test";
import { beforeEach, describe, expect, it } from "vitest";

describe("Hello World worker", () => {
	beforeEach(() => applyD1Migrations(env.DATABASE, env.TEST_MIGRATIONS));

	it("responds with Hello World!", async () => {
		const response = await SELF.fetch("https://example.com");
		expect(await response.text()).toStrictEqual(`Hello World!`);
	});
});
