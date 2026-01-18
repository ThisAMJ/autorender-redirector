const PORT = 80;

function handler(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;
    if (pathname.startsWith('/')) {
        pathname = pathname.slice(1);
    }
    return new Response(null, { status: 302, headers: { Location: `https://autorender.p2sr.org/${pathname}` } });
}

Deno.serve({ port: PORT }, handler);
