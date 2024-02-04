import React from "react";
import correct from "../../../assets/correct.svg";
import wrong from '../../../assets/wrong.svg';
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Feature", "AI Interview", "Physical Interview"];

const TABLE_ROWS = [
  {
    feature: "Efficiency",
    aiInterview: {
      icon: correct,
      content: "Faster and Automated Process",
    },
    physicalInterview: {
      icon: wrong,
      content: "Time Consuming Scheduling and Coordination",
    },
  },
  {
    feature: "Accessibility",
    aiInterview: {
      icon: correct,
      content: "Anytime, Anywhere Accessibility",
    },
    physicalInterview: {
      icon: wrong,
      content: "Limited to Specific Locations and Times",
    },
  },
  {
    feature: "Cost Effectiveness",
    aiInterview: {
      icon: correct,
      content: "Cost-Efficient, No Travel Expenses",
    },
    physicalInterview: {
      icon: wrong,
      content: "Travel Costs, Venue Expenses, and Logistics",
    },
  },
  {
    feature: "Bias Reduction",
    aiInterview: {
      icon: correct,
      content: "Minimized Bias through Objective Criteria",
    },
    physicalInterview: {
      icon: correct,
      content: "Opportunity for Personalized Evaluation",
    },
  },
  {
    feature: "Global Reach",
    aiInterview: {
      icon: correct,
      content: "Reach Candidates Worldwide",
    },
    physicalInterview: {
      icon: wrong,
      content: "Limited to Local or Specific Talent Pools",
    },
  },
  {
    feature: "Data-Driven Insights",
    aiInterview: {
      icon: correct,
      content: "Analytical Insights for Decision-Making",
    },
    physicalInterview: {
      icon: wrong,
      content: "Limited Data Capture and Analysis",
    },
  },
];

const ComparisonTable = () => {
  return (
    <Card className="h-full max-w-full">
      <table className="w-full text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-blue-600 bg-violet-800 text-neutral-100 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ feature, aiInterview, physicalInterview }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4";

            return (
              <tr key={feature}>
                <td className={`${classes} bg-violet-800 text-neutral-100`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {feature}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    <img src={aiInterview.icon} alt="correct" className="w-4 h-4 m-auto" />
                    {aiInterview.content}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    <img src={physicalInterview.icon} alt="wrong" className="w-4 h-4 m-auto" />
                    {physicalInterview.content}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default ComparisonTable;