export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      is_digg: 1
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/commit/item/digg/",
    "/aweme/v1/item/digg/"
  ]
};
