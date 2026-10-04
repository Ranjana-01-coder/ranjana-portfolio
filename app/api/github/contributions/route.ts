import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Ranjana-01-coder";

const query = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions

          months {
            name
            firstDay
            totalWeeks
          }

          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.github_token}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          login: GITHUB_USERNAME,
        },
      }),
      next: {
        revalidate: 3600,
      },
    });

    const result = await response.json();

    if (!response.ok || result.errors) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub contributions" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      result.data.user.contributionsCollection.contributionCalendar
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch GitHub activity" },
      { status: 500 }
    );
  }
}