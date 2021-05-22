const core = require('@actions/core');
const github = require('@actions/github');

async function updatePr(token, title, body, pull_number, owner, repo) {
  const octokit = github.getOctokit(token);

  const req = {
    owner: owner,
    repo: repo,
    pull_number: pull_number
  };

  if (!!title) {
    req['title'] = title;
  }

  if (!!body) {
    req['body'] = body;
  }

  await octokit.rest.pulls.update(req);
}

async function run() {
  try {
    const token = core.getInput('token', {required: true});
    const title = core.getInput('title', {required: false});
    const body = core.getInput('body', {required: false});
    const pull_number = github.context.payload.pull_request.number;
    const owner = github.context.repo.owner;
    const repo = github.context.repo.repo;

    await updatePr(token, title, body, pull_number, owner, repo);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
