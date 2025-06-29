# Changes from SelfhostedPro/Yacht

This fork diverges from SelfhostedPro's 2021 release and adds numerous updates and fixes. Highlights include:

- Updated Dockerfiles that build with Node 20 and Python 3.11 on Debian slim.
- Multi-architecture GitHub Actions workflows for AMD64 and ARM64 images with cosign signing.
- README now points to updated documentation and notes a planned TypeScript rewrite.
- Dependencies for both backend and frontend have been modernized.
- Compose actions gracefully handle missing `docker-compose` binaries.
- Additional compose examples and cleanup of project files.
- License switched to [Creative Commons Attribution 4.0](LICENSE.md) attributed to "wickedyoda" in 2025.

