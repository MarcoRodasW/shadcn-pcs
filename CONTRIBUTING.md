# Contribution Guidelines

Thank you for considering contributing to our project! Before getting started, please ensure you are familiar with the guidelines outlined below.

## 🔍 General Guidelines

1. **React Components**: React components should be created using functional components.
2. **Pages**: Pages should not be made up of components only. They should serve as the layout or structure for your route and fetch necessary data.
3. **Component Creation**: Only create new components when necessary. Examples include reusable components like cards, list items, or components that hold their own state without overwhelming the parent page.
4. **Formatters and Linters**: Before submitting a PR, ensure you've run the necessary formatters and linters, specifically `eslint` and `prettier`.
5. **Testing**: Write end-to-end (e2e) tests for pages when possible. For components with logic and not just aesthetics, ensure unit tests are in place.
6. **Single Page Focus**: If you start working on a page, stick to that page only. Do not make changes to other pages.
7. **Task Dedication**: Dedicate yourself to one task. A Pull Request should only solve one task. Do not mix multiple tasks in one PR.
8. **Pull Requests**: When submitting a PR, provide context where necessary. Ideally, explain the changes made in the Pull Request.
9. **Dependencies**: Do not update dependencies on your own. The `renovate` bot will handle that. If you need to add a dependency for your task, ensure it doesn't break existing code. Likewise, don't remove dependencies without confirming their utility.
10. **Commit Conventions**: Every commit should follow the [conventional commit guidelines](https://www.conventionalcommits.org).
11. **Commit Granularity**: Don't make a single commit for the entire task. Commit based on the completed phases of the task.
12. **Project Structure**: Stick to the file structure outlined in `STRUCTURE.md` and refer to `README.md` for additional documentation.
13. **Code Comments**: Comment your code where necessary. If you're using a complex algorithm, provide a link to the source or explain it in a comment.
14. **Code Readability**: Ensure your code is readable. Use descriptive variable names and avoid unnecessary abbreviations.
15. **Code Reusability**: If you find yourself repeating code, consider creating a utility function or component.
16. **Code Duplication**: Avoid duplicating code. If you find yourself repeating code, consider creating a utility function or component.
17. **Code Consistency**: Ensure your code is consistent with the existing codebase. For example, if you're using single quotes for strings, don't use double quotes in other places.
18. **Code Testing**: Ensure your code is tested according to the project's standards. Use the `cypress` testing framework to test your code.
19. **Code Documentation**: Ensure your code is documented according to the project's standards. Use the `jsdoc` documentation generator to document your code.
20. **Code Review**: Ensure your code is reviewed by at least one other contributor before submitting a PR.
21. **Code Reviewer**: When reviewing code, ensure you're familiar with the project's standards and practices. If you're unsure about something, ask for clarification.
22. **Code Review Comments**: When reviewing code, provide constructive feedback. If you're unsure about something, ask for clarification.
23. **Branch names**: Branch names should be descriptive and follow the [conventional commit guidelines](https://www.conventionalcommits.org). For example, `feat/add-new-page` or `fix/fix-bug`.
    1. For example, if you're working on a new page, your branch name should be `feat/add-new-page`.
    2. If you're fixing a bug, your branch name should be `fix/fix-bug`.
    3. If you're refactoring code, your branch name should be `refactor/refactor-code`.
    4. If you're updating dependencies, your branch name should be `chore/update-dependencies`.
    5. If you're updating documentation, your branch name should be `docs/update-documentation`.
    6. If you're updating tests, your branch name should be `test/update-tests`.
    7. If you're updating the project structure, your branch name should be `chore/update-structure`.
    8. If you're updating the project configuration, your branch name should be `chore/update-configuration`.
    9. If you're updating the project workflow, your branch name should be `chore/update-workflow`.
    10. If you're updating the project tooling, your branch name should be `chore/update-tooling`.
    11. If you're updating the project scripts, your branch name should be `chore/update-scripts`.
    12. If you're updating the project assets, your branch name should be `chore/update-assets`.
24. **Unused branches**: Delete your branch after merging your PR. If you're working on a task that requires multiple PRs, you can keep your branch until you're done with the task.
25. **Branches for a single proposal**: If you're working on a proposal that requires multiple PRs, create a branch for the proposal and create branches for each PR from that branch.
26. **Follow Pull Request Template**: Ensure your PR follows the template provided. Always update Jira ticket when Pull Request state changes. 

By adhering to these guidelines, you'll ensure that your contributions align with the project's standards and practices, making the review and merge process smoother for everyone involved. Thank you for your cooperation!
