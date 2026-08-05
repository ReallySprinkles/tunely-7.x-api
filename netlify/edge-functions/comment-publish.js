export default async (req) => {
  let userText = "Comment"; // Fallback default

  try {
    if (req.method === "POST") {
      const contentType = req.headers.get("content-type") || "";

      // 1. Handle Form-UrlEncoded data (standard TikTok/Douyin app behavior)
      if (contentType.includes("application/x-www-form-urlencoded")) {
        const bodyText = await req.text();
        const params = new URLSearchParams(bodyText);
        userText = params.get("text") || userText;
      } 
      // 2. Handle JSON data (if using custom web clients or modified payloads)
      else if (contentType.includes("application/json")) {
        const bodyJson = await req.json();
        userText = bodyJson.text || userText;
      }
    }
  } catch (err) {
    console.error("Failed to parse incoming comment body:", err);
  }

  return new Response(
    JSON.stringify({
      status_code: 0,
      status_msg: "",
      comment: {
        cid: String(Date.now()), // Unique comment ID based on timestamp
        text: userText,          // Dynamic user input text
        create_time: Math.floor(Date.now() / 1000),
        aweme_id: "7000000000000000001",
        user: {
          uid: "1234567890",
          unique_id: "tunely.user",
          nickname: "tunely user",
          avatar_thumb: {
            url_list: [
              "https://isidjdjdjd.isp/osododod"
            ]
          }
        }
      }
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }
  );
};

export const config = {
  path: [
    "/aweme/v1/comment/publish/",
    "/aweme/v1/comment/publish"
  ]
};
