import dateformat from "dateformat";

function getData() {
  const portfolioFile = require("../../../content/portfolio.json");

  const portfolio = portfolioFile
    .filter(project => !project.hidden)
    .map(project => {
      return {
        name: project.title,
        position: project.subtitle,
        image: project.image,
        blurb: project.blurb
      };
    });

  return { portfolio };
}

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const { portfolio } = getData();
  res.end(JSON.stringify({ portfolio }));
}
