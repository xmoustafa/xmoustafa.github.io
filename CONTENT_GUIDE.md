# Adding topics and articles

All editable knowledge content uses Markdown. Astro pages and navigation do not need to be edited.

## Add an Academy lab write-up

1. Find the lab's URL on the website. For example:
   `/academy/access-control/unprotected-admin-functionality/`
2. Create the matching file:
   `src/content/academy/access-control/unprotected-admin-functionality.md`
3. Copy `src/content/academy/WRITEUP_TEMPLATE.txt`, save the copy with a `.md` extension, and use the required route-based filename.
4. Write the solution below the second `---` line.

The topic and lab page already exist. Saving the Markdown file automatically fills the previously empty write-up area.

## Add a Reverse topic or article

1. Create a Markdown file inside `src/content/reverse/`. Subfolders are allowed.
2. Copy `src/content/reverse/ARTICLE_TEMPLATE.txt` into it and save the copy with a `.md` extension.
3. Set `topic` to the group name you want, such as `Malware Analysis` or `Windows Internals`.
4. Set `title`, `description`, and optional display `order`.
5. Write the article below the frontmatter.

The Reverse index automatically creates the topic group and article card. The article URL is generated automatically.

## Drafts

Set `draft: true` to keep an Academy write-up or Reverse article out of the production website. Change it to `false` when it is ready.

## Markdown features

Use headings, lists, tables, links, images, blockquotes, and fenced code blocks. The existing website theme formats them automatically in light and dark modes.
