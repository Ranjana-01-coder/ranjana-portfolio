"use client";

import { useEffect, useState } from "react";

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionWeek = {
  contributionDays: ContributionDay[];
};

type ContributionData = {
  totalContributions: number;
  months: {
    name: string;
    totalWeeks: number;
  }[];
  weeks: ContributionWeek[];
};

const getContributionColor = (count: number) => {
  if (count === 0) return "#111111";
  if (count <= 2) return "#2e1745";
  if (count <= 5) return "#542580";
  if (count <= 9) return "#7c3aed";
  return "#c084fc";
};

export default function GithubActivity() {
  const [data, setData] = useState<ContributionData | null>(null);

  useEffect(() => {
    fetch("/api/github/contributions")
      .then((res) => res.json())
      .then((result) => {
        if (!result.error) {
          setData(result);
        }
      })
      .catch((error) => {
        console.error("GitHub activity error:", error);
      });
  }, []);

  if (!data) return null;

  return (
    <div className="mt-16 w-full overflow-visible">
      {/* Title + Profile Button */}
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold tracking-tight text-white">
          GitHub Activity
        </h3>

        <a
          href="https://github.com/Ranjana-01-coder"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
        >
          @Ranjana-01-coder
        </a>
      </div>

      {/* Calendar */}
      <div className="mt-10 w-full overflow-visible pb-8">
        <div className="w-full overflow-visible">
          {/* Months */}
          <div className="mb-4 ml-8 flex">
            {data.months.map((month, index) => (
              <span
                key={`${month.name}-${index}`}
                className="text-sm text-gray-500"
                style={{
                  flex: month.totalWeeks,
                }}
              >
                {month.name}
              </span>
            ))}
          </div>

          <div className="flex gap-2 overflow-visible">

            {/* Contribution squares */}
            <div className="flex w-full justify-between gap-[2px] overflow-visible">
              {data.weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="relative flex flex-1 flex-col gap-[3px] overflow-visible"
                >
                  {week.contributionDays.map((day, dayIndex) => {
                    const showTooltipBelow = dayIndex < 2;
                    const isFirstWeek = weekIndex < 2;
                    const isLastWeek = weekIndex >= data.weeks.length - 2;

                    return (
                      <div
                        key={day.date}
                        className="group relative aspect-square w-full max-w-[14px] rounded-[3px] transition-transform duration-200 hover:z-50 hover:scale-125"
                        style={{
                          backgroundColor: getContributionColor(
                            day.contributionCount
                          ),
                        }}
                      >
                        {/* Tooltip */}
                        <div
                          className={`pointer-events-none absolute z-[100] hidden whitespace-nowrap rounded-md bg-[#181818] px-3 py-2 text-xs text-white shadow-xl group-hover:block ${
                            showTooltipBelow
                              ? "top-full mt-2"
                              : "bottom-full mb-2"
                          } ${
                            isFirstWeek
                              ? "left-0"
                              : isLastWeek
                                ? "right-0"
                                : "left-1/2 -translate-x-1/2"
                          }`}
                        >
                          {day.contributionCount}{" "}
                          {day.contributionCount === 1
                            ? "contribution"
                            : "contributions"}{" "}
                          on{" "}
                          {new Date(day.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom information */}
      <div className="mt-7 flex items-center justify-between">
        <p className="text-sm text-gray-400">
          <span className="text-white">
            {data.totalContributions.toLocaleString()}
          </span>{" "}
          contributions in the last year
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Less</span>

          {[0, 1, 3, 6, 10].map((count) => (
            <span
              key={count}
              className="h-4 w-4 rounded-[4px]"
              style={{
                backgroundColor: getContributionColor(count),
              }}
            />
          ))}

          <span>More</span>
        </div>
      </div>
    </div>
  );
}