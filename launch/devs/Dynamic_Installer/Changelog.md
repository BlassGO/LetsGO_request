## Changelog

> ### Standard
>
> - **Apktool** updated to **v2.11.1** (with **baksmali/smali 3.0.9**).  
> - Now includes the extra `customize.sh` and `module.prop` in the **root of the ZIP** by default. This ensures compatibility with **KernelSU**, **Magisk v28+**, and similar module managers.
>   - These are the same files that previously had to be **added manually** to enable such compatibility.
>   - The `customize.sh` of the Magisk Space is still used.
> - Optimized **execution behavior and permission handling**: execution permissions are now only reassigned when **strictly necessary**, avoiding redundant operations when running binaries or scripts. 
> - Improved **file injection** logic across multiple functions. Removed redundant operations, making file modifications slightly faster.  
> - `patch_apk` function has been optimized to be more efficient and aligned with the latest DI standards, reducing error occurrences.  
>
> - New **`is_exec` function:** Verifies execution permissions on any file or folder.  

> ### Z variant
>
> - Same as the Standard version. With the exception of the addition of the extra `customize.sh` and `module.prop` files, because the Standard variant is the usual and recommended for modules.
