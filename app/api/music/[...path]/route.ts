const API_BASE_URL = process.env.BACKEND_URL || "http://localhost:8000";

type RouteParams = {
  params: Promise<{
    path?: string[];
  }>;
};

const buildBackendUrl = (request: Request, path: string[]) => {
  const backendPath = `/music/${path.join("/")}`.replace(/\/+$|\/$/g, "");
  const url = new URL(backendPath, API_BASE_URL);
  const requestUrl = new URL(request.url);
  url.search = requestUrl.search;
  return url;
};

async function proxyRequest(
  request: Request,
  context: RouteParams,
): Promise<Response> {
  const { path = [] } = await context.params;
  const url = buildBackendUrl(request, path);
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("accept-encoding");

  try {
    const upstreamResponse = await fetch(url, {
      method: request.method,
      headers,
      body:
        request.method === "GET" || request.method === "HEAD"
          ? undefined
          : request.body,
      redirect: "manual",
    });

    const responseHeaders = new Headers(upstreamResponse.headers);
    responseHeaders.delete("content-encoding");
    responseHeaders.delete("content-length");
    responseHeaders.delete("transfer-encoding");

    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Music API proxy failed:", error);
    return new Response("Upstream request failed.", {
      status: 502,
      headers: {
        "content-type": "text/plain",
      },
    });
  }
}

export async function GET(request: Request, context: RouteParams) {
  return proxyRequest(request, context);
}

export async function POST(request: Request, context: RouteParams) {
  return proxyRequest(request, context);
}

export async function PUT(request: Request, context: RouteParams) {
  return proxyRequest(request, context);
}

export async function DELETE(request: Request, context: RouteParams) {
  return proxyRequest(request, context);
}

export async function PATCH(request: Request, context: RouteParams) {
  return proxyRequest(request, context);
}
