import dateformat from "dateformat";

function getData() {
  const portfolioFile = require("../../../content/portfolio.json");

  const portfolio = portfolioFile
    .filter(project => !project.hidden)
    .map(project => {
      return {
        name: project.name,
        position: project.position,
        yearMajor: project.yearMajor,
        image: project.image,
        gitHub: project.gitHub,
        linkedIn: project.linkedIn,
        email: project.email,
        blurb: project.blurb
      };
    });

  const timelineFile = require("../../../content/timeline.json");

  const timeline = timelineFile
    .map(item => ({ ...item, date: `${item.date}-02` }))
    .map(item => ({
      prettyDate: dateformat(item.date, "mmmm yyyy"),
      ...item
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return { portfolio, timeline };
}

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const { portfolio, timeline } = getData();
  res.end(JSON.stringify({ portfolio, timeline }));
}
