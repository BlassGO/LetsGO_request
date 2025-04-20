## Changelog

> ### Standard
>
> - **Apktool** updated to **v2.11.1** (with **baksmali/smali 3.0.9**).  
> - Improved **file injection** logic across multiple functions. Removed redundant operations, making file modifications slightly faster.  
> - Optimized **execution permission handling**:  
>    - Previously, execution functions (`run`, `run_wait`, `run_program`) always reassigned permissions.  
>    - Now, permissions are only reassigned **when truly necessary**, and only the **minimum required** for execution.  
> - `patch_apk` function has been optimized to be more efficient and aligned with the latest DI standards, reducing error occurrences.  
>
> - New **`is_exec` function:** Verifies execution permissions on any file or folder.  

> ### Z variant
>
> - Same as the standard version.
