# Contributing to KeloDraken

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Our Development Process

All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly [here](https://github.com/kelodraken/kelodraken.com/pulls), and after review, these can be merged into the project.

## Pull Requests

1. Fork the repo and create your branch (usually named `patch-%the number of PRs you've already made%`) from `swak`.
2. If you've added code that should be tested, add some test examples.
3. Ensure to describe your pull request.

## Quickstart Local Development:

### UI _(react)_:

Navigate to `/vetkoek`

- Run `yarn`
- Run `yarn dev`
- Read `vetkoek/README.md` for more information and fixes for known development issues.

### Backend _(django)_:
Navigate to `/biltong`

```shell
$ mkvirtualenv env
$ source env/bin/activate (Mac/Linux)
$ env\Scripts\activate (Windows)
$ (env) pip install -r requirements.txt
$ (env) python manage.py migrate
$ (env) python manage.py createsuperuser
$ (env) python manage.py runserver
```

## Issues

> NOTE: If your bug is a **security vulnerability**, please instead see the [security policy](https://github.com/kelodraken/kelodraken.com/security/policy)

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue. Report a bug by <a href="https://github.com/kelodraken/kelodraken.com/issues">opening a new issue</a>; it's that easy!

<!-- ## Frequently Asked Questions (FAQs)--->

<!--- I thought it would be great to have a list of FAQs for the project to help save time for new contributors--->
<!-- 
    - Q: [The Question?]
    - A: [The Answer!] -->

## Feature Request

Great Feature Requests tend to have:

- A quick idea summary.
- What & why you wanted to add the specific feature.
- Additional context like images, links to resources to implement the feature etc, etc.

## License

By contributing to KeloDraken, you agree that your contributions will be licensed
under the [LICENSE file](LICENSE).
