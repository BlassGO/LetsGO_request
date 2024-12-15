## Changelog

> ### Standard
>
> - **Deep general maintenance**: Several native functions and variables were restructured to achieve greater efficiency.
> - Except for commonly used native variables (`$yes`, `$DEVICE`, `$is64bit`, ...), any additional variable used by DI functions with global access now has a reserved "___" prefix. Under this new rule, DI scripts must avoid using variables that start with this prefix to ensure conflict-free execution and prevent critical information loss. Previous versions did not address this potential risk.
> - The `string` function, responsible for text processing in most native functions, was restructured and optimized. This guarantees more accurate text manipulations in less time.
> - The `-after-line` and `-before-line` flags now respect the `-recursive` flag within the `string` function and its dependent functions. Previously, it was not possible to limit additions to only the first result. This is now the default mode unless recursion to all results is explicitly specified.
> - Functions such as `add_lines`, `add_lines_string`, `add_lines_zip`, and `smali_kit` now include the `-recursive` flag to process all available results (as in previous versions). If not specified, they will only operate on the first result. In `smali_kit`, this applies even to text replacements or deletions, allowing for more precise control.
> - The `try_mount` function, responsible for most partition mounting processes, was restructured and optimized. This ensures faster responses in dependent functions such as `mount_all`.
> - Redundant functions were replaced with aliases. While this does not affect usage, it slightly improves performance.
> - The response time of `$yes` was optimized.

> ### Z variant
>
> - Same as the standard version.
