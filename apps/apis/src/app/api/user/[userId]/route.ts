export async function GET(req: Request) {
  const userId = req.params.userId;

  return new Response('Hello World!');
}