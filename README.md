# OpticAI Lab Homepage

This repository hosts the homepage for OpticAI Lab at Shanghai Jiao Tong University.

It is built with Jekyll and serves a lab-style website with project pages, news, and research highlights.

## Local preview

```bash
bundle exec jekyll serve
```

Then open:

```text
http://127.0.0.1:4000/
```

## Project pages

Project content lives in `projects/`, and the homepage routing is defined in `projects.js`.

To add or update a project:

1. Add or edit the corresponding HTML file in `projects/`
2. Update the project metadata in `projects.js`
3. If needed, add figures under the matching `projects/*_fig/` folder

## Notes

- The site is meant to stay lightweight and easy to update.
- Some project pages are still placeholders and will be filled in as new materials become available.
