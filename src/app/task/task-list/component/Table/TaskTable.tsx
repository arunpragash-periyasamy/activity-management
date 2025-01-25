import TableShimmer from "@/components/TableShimmer/TableShimmer";
import { formatDate } from "@/utility/interfaces/helper/ConvertDateFormat";
import React, { useState, useEffect } from "react";

const priorityLevelColour = {
  high: "bg-red-500 dark:bg-red-400",
  medium: "bg-yellow-500 dark:bg-yellow-400",
  low: "bg-green-500 dark:bg-green-400",
  critical: "bg-purple-500 dark:bg-purple-400",
};
const TaskTable = () => {
  const [data, setData] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  interface Task {
    task_title: string;
    description: string;
    date: string;
    priority_level: "High" | "Medium" | "Low" | "Critical";
    comments: string;
  }

  useEffect(() => {
    setTimeout(() => {
      // Mock API data
      setData([
        {
          task_title: "Complete Financial Report",
          description:
            "Finish the quarterly financial report and submit to management.",
          date: "2025-02-01",
          priority_level: "High",
          comments: "Ensure to verify all the numbers and calculations.",
        },
        {
          task_title: "Update Website Content",
          description: "Revise the content on the homepage and blog section.",
          date: "2025-02-05",
          priority_level: "Medium",
          comments: "Coordinate with the content team for new text and images.",
        },
        {
          task_title: "Client Meeting Preparation",
          description:
            "Prepare slides and documentation for the upcoming client presentation.",
          date: "2025-01-28",
          priority_level: "Critical",
          comments:
            "Ensure all client concerns are addressed in the presentation.",
        },
        {
          task_title: "Fix Website Bugs",
          description:
            "Identify and resolve bugs reported by users on the website.",
          date: "2025-01-25",
          priority_level: "High",
          comments: "Follow up with the QA team after testing.",
        },
        {
          task_title: "Team Training on New Software",
          description:
            "Conduct training session for the team on the new project management tool.",
          date: "2025-02-03",
          priority_level: "Medium",
          comments: "Send out invitations and materials before the session.",
        },
        {
          task_title: "Marketing Campaign Launch",
          description: "Launch the digital marketing campaign for product X.",
          date: "2025-02-10",
          priority_level: "High",
          comments:
            "Coordinate with the marketing team to ensure all assets are ready.",
        },
        {
          task_title: "Write Product Blog Post",
          description:
            "Write and publish a blog post highlighting the new product features.",
          date: "2025-02-15",
          priority_level: "Medium",
          comments: "Ensure SEO optimization and include relevant keywords.",
        },
        {
          task_title: "Review Employee Performance Reports",
          description:
            "Evaluate the performance reports of all employees for the last quarter.",
          date: "2025-01-30",
          priority_level: "High",
          comments: "Provide feedback and suggestions for improvement.",
        },
        {
          task_title: "Organize Annual Company Picnic",
          description:
            "Coordinate the logistics and activities for the company picnic.",
          date: "2025-03-05",
          priority_level: "Low",
          comments: "Secure venue and catering options.",
        },
        {
          task_title: "Renew Software Licenses",
          description:
            "Ensure all software licenses are renewed before expiration.",
          date: "2025-01-29",
          priority_level: "Medium",
          comments: "Verify the budget for license renewal.",
        },
        {
          task_title: "Audit Company Expenses",
          description:
            "Perform an audit of the company's expenses for the last quarter.",
          date: "2025-02-12",
          priority_level: "High",
          comments:
            "Coordinate with the finance department for required documents.",
        },
        {
          task_title: "Develop New Feature for App",
          description:
            "Develop and integrate the new feature as per the requirements.",
          date: "2025-02-20",
          priority_level: "Medium",
          comments: "Test thoroughly before deployment.",
        },
        {
          task_title: "Update Social Media Profiles",
          description:
            "Update social media profiles with the latest company achievements.",
          date: "2025-01-26",
          priority_level: "Low",
          comments: "Schedule posts across all platforms.",
        },
        {
          task_title: "Client Feedback Review",
          description: "Review and address feedback received from clients.",
          date: "2025-02-08",
          priority_level: "Medium",
          comments: "Prepare a report summarizing the key points.",
        },
        {
          task_title: "Team Building Activity",
          description:
            "Organize an interactive team-building activity for the department.",
          date: "2025-03-02",
          priority_level: "Low",
          comments: "Ensure the activity is fun and inclusive.",
        },
        {
          task_title: "Prepare Budget Proposal",
          description:
            "Prepare the budget proposal for the upcoming fiscal year.",
          date: "2025-02-25",
          priority_level: "High",
          comments:
            "Consult with the finance department for accurate estimates.",
        },
        {
          task_title: "Website SEO Optimization",
          description: "Optimize the website for better search engine ranking.",
          date: "2025-01-31",
          priority_level: "Medium",
          comments: "Focus on improving load time and keyword usage.",
        },
        {
          task_title: "Prepare for Audit",
          description:
            "Prepare all necessary documents for the upcoming company audit.",
          date: "2025-02-18",
          priority_level: "High",
          comments: "Work closely with the accounting team.",
        },
        {
          task_title: "Finalize Employee Benefits Package",
          description:
            "Finalize the new employee benefits package for approval.",
          date: "2025-02-22",
          priority_level: "Medium",
          comments: "Coordinate with HR to review the proposed changes.",
        },
        {
          task_title: "Update Project Roadmap",
          description:
            "Update the project roadmap with current timelines and deliverables.",
          date: "2025-01-27",
          priority_level: "Medium",
          comments:
            "Review with the project management team before finalizing.",
        },
        {
          task_title: "Develop Marketing Strategy for Q2",
          description:
            "Create a marketing strategy for the second quarter of the year.",
          date: "2025-02-07",
          priority_level: "Medium",
          comments: "Focus on new customer acquisition and brand awareness.",
        },
        {
          task_title: "Customer Support Training",
          description:
            "Conduct a training session for the customer support team on new tools.",
          date: "2025-02-13",
          priority_level: "Low",
          comments:
            "Ensure all team members are familiar with the new platform.",
        },
        {
          task_title: "Redesign Company Logo",
          description:
            "Work with the design team to refresh the company logo for the rebrand.",
          date: "2025-03-01",
          priority_level: "Medium",
          comments: "Focus on keeping the design modern yet recognizable.",
        },
        {
          task_title: "Implement Security Protocol Updates",
          description:
            "Ensure all security protocols are up to date across company systems.",
          date: "2025-02-06",
          priority_level: "High",
          comments: "Coordinate with the IT department for patch deployment.",
        },
        {
          task_title: "Sales Team Strategy Meeting",
          description:
            "Meet with the sales team to discuss strategy for the upcoming quarter.",
          date: "2025-02-14",
          priority_level: "Medium",
          comments: "Prepare performance data and insights.",
        },
        {
          task_title: "Plan Corporate Event",
          description: "Plan and organize the annual corporate event.",
          date: "2025-03-15",
          priority_level: "Low",
          comments: "Consider various venues and catering options.",
        },
        {
          task_title: "Software Update Deployment",
          description:
            "Deploy the latest software update to all company devices.",
          date: "2025-01-24",
          priority_level: "High",
          comments: "Test on a few devices before full rollout.",
        },
        {
          task_title: "Conduct Employee Satisfaction Survey",
          description:
            "Design and distribute an employee satisfaction survey to gather feedback.",
          date: "2025-02-02",
          priority_level: "Medium",
          comments: "Analyze results and prepare a summary report.",
        },
        {
          task_title: "Update Legal Documents",
          description: "Review and update the legal documents and contracts.",
          date: "2025-02-21",
          priority_level: "Medium",
          comments: "Ensure compliance with new regulations.",
        },
        {
          task_title: "Create New Product Prototype",
          description: "Develop a prototype for the new product concept.",
          date: "2025-03-10",
          priority_level: "Medium",
          comments: "Coordinate with the R&D team for feedback.",
        },
        {
          task_title: "Client Onboarding Process",
          description: "Revise and improve the client onboarding process.",
          date: "2025-02-28",
          priority_level: "High",
          comments: "Ensure a smooth and efficient onboarding experience.",
        },
        {
          task_title: "Perform System Backup",
          description: "Perform a full backup of the company's data systems.",
          date: "2025-01-23",
          priority_level: "High",
          comments: "Verify the integrity of the backup files.",
        },
        {
          task_title: "Redesign Employee Handbook",
          description:
            "Update and redesign the employee handbook with new policies.",
          date: "2025-02-17",
          priority_level: "Medium",
          comments: "Ensure all recent changes to policies are included.",
        },
        {
          task_title: "Update CRM System",
          description:
            "Update the customer relationship management (CRM) system with the latest data.",
          date: "2025-02-04",
          priority_level: "Medium",
          comments: "Verify that all customer details are accurate.",
        },
        {
          task_title: "Upgrade Network Infrastructure",
          description:
            "Upgrade the company's network infrastructure to improve speed and security.",
          date: "2025-02-11",
          priority_level: "High",
          comments:
            "Coordinate downtime with the IT team to minimize disruptions.",
        },
        {
          task_title: "Create Client Proposal",
          description:
            "Draft and send a proposal to the potential client for their project.",
          date: "2025-02-16",
          priority_level: "Medium",
          comments: "Review with the sales team before sending.",
        },
        {
          task_title: "Launch Internal Newsletter",
          description: "Create and launch the monthly internal newsletter.",
          date: "2025-01-29",
          priority_level: "Low",
          comments: "Include updates from all departments.",
        },
        {
          task_title: "Conduct Risk Assessment",
          description: "Conduct a risk assessment for the new project launch.",
          date: "2025-02-09",
          priority_level: "High",
          comments: "Identify potential risks and mitigation strategies.",
        },
        {
          task_title: "Vendor Contract Negotiations",
          description:
            "Negotiate terms with vendors for upcoming project supply needs.",
          date: "2025-03-03",
          priority_level: "Medium",
          comments: "Review existing contracts for potential savings.",
        },
        {
          task_title: "Design New Marketing Materials",
          description: "Create design assets for upcoming marketing campaigns.",
          date: "2025-02-19",
          priority_level: "Medium",
          comments: "Ensure designs align with brand guidelines.",
        },
      ]);
      setLoading(false);
    }, 2000); // Simulating API call delay
  }, []);

  return (
    <div className="relative p-4">
      <div
        className={`w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md`}
      >
        {loading ? (
          // shimmer
          <TableShimmer rows={10} columns={6} />
        ) : (
          <div className="overflow-y-auto max-h-[60rem]">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    S.No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Task Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Priority Level
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      <div className="flex gap-2 items-center">
                      {idx + 1}{" "}
                      <span className="hover:cursor-pointer hover:text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-3 hover:size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                          />
                        </svg>
                      </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      {row.task_title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      {row.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      {formatDate(row.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 text-center">
                      <span
                        className={`p-1 rounded-md ${
                          priorityLevelColour[
                            row.priority_level.toLowerCase() as keyof typeof priorityLevelColour
                          ]
                        } text-white`}
                      >
                        {row.priority_level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                      {row.comments}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskTable;
