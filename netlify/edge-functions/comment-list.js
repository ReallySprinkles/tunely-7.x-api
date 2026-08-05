// netlify/edge-functions/comment-list-handler.js

export default async (req) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers });
  }

  const defaultPic = "https://raw.githubusercontent.com/ReallySprinkles/random-ahh-stuff-lol/refs/heads/main/finn_the_human_pfp_.png";
  const avatarObj = {
    uri: defaultPic,
    url_list: [defaultPic, defaultPic],
    width: 720,
    height: 1280
  };

  const now = Math.floor(Date.now() / 1000);

  // Helper to construct items compatible with both legacy musical.ly and modern TikTok
  const formatComment = (cid, text) => ({
    cid: String(cid),
    text: text,
    create_time: now,
    digg_count: 0,
    status: 1,
    user_digged: 0,
    reply_comment: null,
    text_extra: [], // REQUIRED by legacy musical.ly layout engine to prevent row collapse
    label_info: "",
    user: {
      uid: "7117828228",
      short_id: "7117828228",
      unique_id: "sprinkles.dude",
      display_id: "sprinkles.dude", // Required by musical.ly
      nickname: "sprinkles.dude",  // Legacy musical.ly uses nickname for the top line handle
      custom_verify: "",
      enterprise_verify_reason: "",
      avatar_thumb: avatarObj,
      avatar_medium: avatarObj,
      avatar_larger: avatarObj
    }
  });

  const commentsPayload = {
    status_code: 0,
    status_msg: "",
    comments: [
      formatComment("1000000001", "Hi"),
      formatComment("1000000002", "I")
    ],
    total: 2,
    has_more: 0,
    cursor: 0,
    empty_tooltips: ""
  };

  return new Response(JSON.stringify(commentsPayload), {
    status: 200,
    headers
  });
};

export const config = {
  path: [
    "/aweme/v1/comment/list/",
    "/aweme/v1/comment/list",
    "/aweme/v2/comment/list/",
    "/aweme/v2/comment/list"
  ]
};
