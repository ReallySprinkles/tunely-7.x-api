exports.handler = async (event, context) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Set-Cookie": "sessionid=mock_session_active_12345; Path=/; Domain=.netlify.app; HttpOnly, sid_tt=mock_session_active_12345; Path=/; Domain=.netlify.app; HttpOnly, uid_tt=735712345678; Path=/; Domain=.netlify.app; HttpOnly"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: "success",
      status_code: 0,
      error_code: 0,
      data: {
        error_code: 0,
        description: "",
        user_id: "735712345678",
        user_id_str: "735712345678",
        sec_user_id: "MS4wLjABAAAA_mock_sec_uid_12345",
        unique_id: "tunely.user",
        screen_name: "tunely user",
        is_login: true,
        session_key: "mock_session_active_12345",
        passport_user_id: "735712345678",
        status: 1
      }
    })
  };
};
