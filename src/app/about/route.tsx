import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    fontSize: 32,
                    fontWeight: 600,
                }}
            >
                <img
                    src="https://ujjwal-new-portfolio.vercel.app/images/seo.png"
                    alt="something"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        ),
        {
            width: 1920,
            height: 902,
        },
    );
}
