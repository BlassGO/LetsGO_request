## Changelog

> ### Standard
>
> - Additional optimizations were implemented.
> - Native functions were adjusted/fixed to follow the optimized alias logic introduced in DI v5.3-b. Previously, this caused minor issues such as failures in deleting temporary files.
> - Starting from this version (v5.3-b2+), flags defining behavior in functions (`-recursive`, `-force`, `-all-line`, `-p`, ...) must be placed at the beginning of all parameters. Previously, they could also be placed at the end, but this incurred a small cost for filtering. Most examples in the XDA thread already used them at the beginning, so this is a common practice in DI scripts and should not pose compatibility risks for most projects. Despite this, parameter flexibility was preserved for critical or high-processing functions such as `update`, `update_zip`, `dynamic_apktool`, `string`, ...
> - The `off_readonly` function was replaced by a `setdefault` property (it added unnecessary load in most cases, and its interpretation was closer to `setdefaults`).
> - The `string` function now respects the `-recursive` flag even for the `replace_line` and `remove_line` flags. By default, it applies only to the first match unless `-recursive` is specified. Additionally, both `replace_line` and `remove_line` now accept empty string searches `""` to represent the replacement or removal of empty lines.
> - The logic for the `replace` and `remove` functions was optimized. They now also support new flags:
>   - `-only-first`: Replaces/removes only the first match.
>   - `-bytes` and `-min-bytes`: Configure readable file detection, ensuring edits are limited to textual files, even when performing `-recursive` searches in directories, reducing the risk of handling binary files.
> - The `smali_kit` function's logic was optimized. It is now more efficient when searching for defined filenames. Previously, defining a filename only prevented unwanted file editing but did not improve performance. Now, one or multiple possible filenames can be defined for the search, significantly reducing processing time. The `-static-name` flag was removed, as the `-name` flag now supports partial name searches ("filename*"), and a new `-iname` flag was added for case-insensitive name searches.
> - The `convert` function's logic was optimized, improving performance for dynamic indirect calculations compared to previous versions.
> - The `magic_file` function's logic was optimized for quick file type checks. The `-line` and `-show-line` flags were removed as unnecessary. Support for detecting F2FS partitions was added.
> - The `update_file` and `update_file_string` functions were optimized. A new `-force` flag was added, intended to replace the `force_update_file` and `force_update_file_string` functions (legacy compatibility is maintained by treating them as equivalent to using the `-force` flag). These functions now ensure that existing props are updated directly on their original line, even with the `-force` flag.
> - The `update_file` and `update_file_string` functions are now fully dedicated to prop manipulation. Old logic for XML manipulation was removed; dedicated functions like `xml_kit` should now be used.
> - The `patch_fstab` function now supports a `-backup` flag to include an original copy of each modified line with a `#` prefix, treating them as comments.
> - The `getblocks` function's logic was optimized. It now ensures ordered and broader results. The `all_partitions` variable and assignment of all partitions as variables were removed (alternatives like `find_block` are preferred). The `getbins` function's logic was also optimized, efficiently returning all executables in the environment and their paths. The `bins` variable was removed as it was unnecessary in most cases.
> - The `is_readable` function's logic was optimized for more precise file readability checks.
> - The `ui_print` function is no longer sensitive to indirect escapes. Previously, including a `\n` could be interpreted as a line break. It now ensures fully literal text, guaranteeing uniform compatibility across environments such as Recovery.
> - The logic of other functions like `set_perm`, `get_file_prop`, `repeat`, and many more was optimized.
> - A new `find_readable` function was added. It allows searching for files using the same parameters as the native `find` command but ensures precise filtering of readable files (text files or similar).

> ### Z variant
>
> - Same as the standard version.
