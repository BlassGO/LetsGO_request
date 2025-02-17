## Changelog

> ### Standard
>
> - **General Improvements:**  
>   - Optimizations for a slightly faster initial execution.  
>   - Improved compatibility with **KSU Next**. Thanks to **@[saadelasfur](https://t.me/saadelasfur)** for reports and testing.  
>   - Optimized the definition of native variables.  
>   - Enhanced device detection with `setdefault devices`.  
>
> - **Maintenance of functions:**  
>   - **`xml_kit` function:**  
>     - Fully rebuilt and optimized, making it a top-tier function for editing **XML** (or similar) files in the DI.  
>     - Now includes **robust logic** for deep structure handling, ensuring safer and more precise modifications.  
>     - Added support for retrieving **specific values** from the structure using `-get-value`, based on the traversed depth.  
>
> - **Bug Fixes:**  
>   - Fixed `-preserve-addons` flag in `make_zip`, which had been broken for many versions.  
>   - Fixed variable assignment issues in `multi_option` where some variable names were unavailable.  
>
> - **Extra features:**  
>   - `remove` and `replace` can now **bypass file readability checks** by setting `-bytes` or `-min-bytes` to `0`. Introduced a new flag **`-no-check`**, equivalent to the above, allowing more flexible file operations.  
>
> - **New Functions:**  
>   - **`random` function:**  
>     - Generates **pseudo-random numbers** and allows setting a limit.  
>   - **`map_file_props` function:**  
>     - Similar to `get_file_prop`, but supports searching **multiple properties** in a single file or across multiple files.  
>     - Assign an **ordered array** of values, maintaining the search property order regardless of their position in the files.  

> ### Z variant
>
> - Same as the standard version.
