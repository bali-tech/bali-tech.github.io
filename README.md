<<<<<<< HEAD
# bali-tech.github.io
Political commentary &amp; history blog
=======
# Jekyll Political Commentary Blog

This is a production-ready Jekyll blog designed for political commentary, historical analysis, and governance-related topics. It is optimized for deployment on GitHub Pages.

## Table of Contents

- [Local Development](#local-development)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Customization](#customization)
  - [Changing Site Name and Details](#changing-site-name-and-details)
  - [Configuring a Custom Domain](#configuring-a-custom-domain)
  - [Modifying Theme Colors](#modifying-theme-colors)
- [Content Management](#content-management)
  - [How to Add a New Blog Post](#how-to-add-a-new-blog-post)

---

### Local Development

To run and preview the site on your local machine, you need to have Ruby and Jekyll installed.

1.  **Install Dependencies:**
    ```bash
    bundle install
    ```

2.  **Serve the Site:**
    ```bash
    bundle exec jekyll serve --livereload
    ```
    Open your browser and navigate to `http://127.0.0.1:4000/`. The `--livereload` flag will automatically refresh the page when you make changes.

---

### Deployment to GitHub Pages

This project is built to be deployed seamlessly on GitHub Pages.

1.  **Create a GitHub Repository:**
    - Create a new public repository on GitHub. For a user/organization site, name it `<username>.github.io`. For a project site, you can use any name.

2.  **Push Your Code:**
    - Add your GitHub repository as the remote and push the code:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin https://github.com/<username>/<repository-name>.git
      git push -u origin main
      ```

3.  **Configure GitHub Pages:**
    - Go to your repository's **Settings** tab.
    - Navigate to the **Pages** section in the left sidebar.
    - Under **Build and deployment**, select **Source** as `Deploy from a branch`.
    - Choose the `main` branch and the `/(root)` folder. Click **Save**.

GitHub will automatically build and deploy your site. It will be available at `https://<username>.github.io/<repository-name>/` (for project sites) or `https://<username>.github.io` (for user sites).

---

### Customization

#### Changing Site Name and Details

All major site-wide variables are in the `_config.yml` file. Edit this file to change:
- `title`: Your blog's name.
- `author`: Your name.
- `description`: A short summary of your blog for SEO.
- `url`: Your final production URL (e.g., `https://yourdomain.in`).
- `email`: Your contact email.
- `twitter_username`, `github_username`, etc.: For social links.

#### Configuring a Custom Domain

1.  **Update CNAME:**
    - Replace the placeholder in the `CNAME` file with your custom domain (e.g., `www.yourblog.in`).

2.  **Update DNS Records:**
    - Go to your domain registrar or DNS provider.
    - Add the following DNS records:
      - **For an apex domain (e.g., `yourblog.in`):**
        - Create `A` records pointing to GitHub's IP addresses:
          ```
          185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153
          ```
      - **For a `www` subdomain (e.g., `www.yourblog.in`):**
        - Create a `CNAME` record pointing to `<username>.github.io`.

3.  **Configure in GitHub:**
    - In your repository's **Settings > Pages**, enter your custom domain in the "Custom domain" field and click **Save**. GitHub will check your DNS settings and enable HTTPS.

#### Modifying Theme Colors

The theme colors are defined using CSS variables in `assets/css/style.css`.

- Open `assets/css/style.css`.
- Modify the color values inside the `:root` (for light theme) and `[data-theme="dark"]` (for dark theme) selectors.

```css
:root {
  /* Light Theme */
  --bg-color: #ffffff;
  --text-color: #212529;
  --link-color: #007bff;
  /* ... more colors */
}

[data-theme="dark"] {
  /* Dark Theme */
  --bg-color: #1a1a1a;
  --text-color: #f8f9fa;
  --link-color: #61dafb;
  /* ... more colors */
}
```

---

### Content Management

#### How to Add a New Blog Post

1.  **Create a File:**
    - Navigate to the `_posts` directory.
    - Create a new file with the filename format `YYYY-MM-DD-your-post-title.md`. For example: `2025-12-25-a-new-beginning.md`.

2.  **Add Front Matter:**
    - At the very top of the file, add the "front matter" block. This is essential for Jekyll to process the post correctly.
      ```yaml
      ---
      layout: post
      title: "Your Post Title Here"
      date: YYYY-MM-DD HH:MM:SS +0000
      author: "Your Name"
      category: "Politics" # Must be one from _config.yml
      ---
      ```
    - **`category`** is used for filtering. Make sure it matches one of the categories defined in `_config.yml`.

3.  **Write Your Content:**
    - Below the front matter, write your article using Markdown syntax.

4.  **Commit and Push:**
    - Save the file, commit it to your Git repository, and push the changes to GitHub. GitHub Pages will automatically detect the new post and rebuild your site.
>>>>>>> 1e032fb (Initial blog website setup)
