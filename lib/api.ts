import { cache } from "react";
import { PortfolioData } from "./types";

const API_BASE_URL = "https://www.api.remoet.dev";

export const fetchPortfolioData = cache(
  async (): Promise<PortfolioData | null> => {
    const apiKey = process.env.REMOET_API_KEY;

    if (!apiKey) {
      console.warn(
        "REMOET_API_KEY is not set. Add it to your .env.local file. Showing placeholder content."
      );
      return null;
    }

    const res = await fetch(`${API_BASE_URL}/user/full`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch portfolio data: ${res.status} ${res.statusText}`
      );
      return null;
    }

    return res.json();
  }
);
