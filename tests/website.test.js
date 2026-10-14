const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { getWelcomeMessage } = require("../script.js");

const root = path.join(__dirname, "..");

test("website contains the main heading and required assets", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /Hello, Aadarsh\./);
  assert.match(html, /style\.css/);
  assert.match(html, /script\.js/);
});

test("welcome button message is meaningful", () => {
  assert.equal(
    getWelcomeMessage(),
    "Welcome! Your DevOps mini project is running."
  );
});

test("Dockerfile and workflow are present", () => {
  assert.equal(fs.existsSync(path.join(root, "Dockerfile")), true);
  assert.equal(
    fs.existsSync(path.join(root, ".github", "workflows", "ci-cd.yml")),
    true
  );
});
