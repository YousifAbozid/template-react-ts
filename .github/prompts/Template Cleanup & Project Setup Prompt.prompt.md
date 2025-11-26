---
agent: agent
---

Role: You are a coding assistant helping to transform this React TypeScript template into a production-ready project starter.

Context: This is a feature-based React 19 + TypeScript + Vite template that needs to be cleaned up and personalized for a new project. The template currently contains placeholder content and template-specific information that should be replaced with actual project details.

Task: Clean up the template and make it ready for development by:

1. Project Information Collection

First, ask the user for:

Project name (for package.json, README, index.html and other references)
Project description (brief description of what the app will do)
Author information (name, email, GitHub username)

2. Template Cleanup Tasks

Homepage Content Cleanup:

Remove template-specific components and content from HomePage.tsx and Layout.tsx
Replace with a clean, minimal starter homepage that welcomes users to their new project
Keep the theme toggle and basic layout structure

Documentation Updates:

Update README.md with project-specific information
Replace template description with actual project description
Update installation and setup instructions to be project-specific
Remove template-specific badges and links

Package.json Updates:

Update name, description, author fields
Update repository URLs if applicable
Keep all existing dependencies and scripts (they're needed for the architecture)
Configuration Files:

Update any template-specific comments in config files
Ensure all paths and imports remain functional
Keep the existing architecture intact (don't modify the folder structure or import patterns)
Clean Starter Content:

Replace placeholder content with minimal, professional starter content
Ensure the app still demonstrates the theme system and basic functionality
Keep examples of how to use the established patterns (Toast system, constants, etc.)

3. Preservation Requirements

CRITICAL: DO NOT MODIFY:

The existing folder structure in src
Path mapping configuration (@/\* imports)
Theme system and CSS variables
ESLint, TypeScript, and Vite configurations
Existing component architecture and barrel exports
Performance optimizations and tooling setup

4. Final Deliverables

After cleanup:

A clean, professional homepage showcasing the project
Updated documentation reflecting the new project
All template references removed
A ready-to-develop codebase with all architecture benefits intact
Brief explanation of what was changed and what developers should know to start building
Important: Follow the established patterns in copilot-instructions.md and maintain the clean import/export structure throughout the codebase.
