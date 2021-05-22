# PR Updater - Github action

A [GitHub Action](https://github.com/features/actions) to update pull request title and body.

## Usage

1. Create a `.github/workflows/pr-update.yml` file in your GitHub repo.
2. Add the following code to the `pr-update.yml` file.

```yml
on:
  pull_request:
    types:
      - opened
      - synchronize
      - reopened
      - ready_for_review
    branches:
      - master

jobs:
  attach:
    runs-on: ubuntu-18.04

    steps:
      - name: Update pr
        if: success()
        uses: juztcode/pr-updater@1.0.0
        with:
          title: Test
          body: Test
```

## Inputs

Input             | Purpose
------------------|---------------------------------------------------------------------------------------------------------------------------------------
title             | PR title.
body              | PR body.
