export default async () => {
  return new Response(
    JSON.stringify({
      status_code: 0,
      follow_status: 1,
      watch_status: 0
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/commit/follow/user/",
    "/aweme/v1/user/follow/"
  ]
};
