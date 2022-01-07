import dateformat from "dateformat";

function getData() {
  const portfolioFile = require("../../../content/portfolio.json");

  const portfolio = portfolioFile
    .filter(member => !member.hidden)
    .map(member => {
      return {
        name: member.name,
        position: member.position,
        yearMajor: member.yearMajor,
        image: member.image,
        gitHub: member.gitHub,
        linkedIn: member.linkedIn,
        email: member.email,
        blurb: member.blurb
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
