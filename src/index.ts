export default {
	async fetch(request, env, ctx): Promise<Response> {
		const exampleRows = (
			await env.DATABASE.prepare("SELECT * FROM example").all()
		).results;

		return new Response(exampleRows[0]?.name as string | null);
	},
} satisfies ExportedHandler<Env>;
