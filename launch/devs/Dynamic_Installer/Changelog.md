## Changelog

> ### Standard
>
> - Updated to Apktool 2.11.0 (with baksmali/smali v3.0.9).  
>   - Initial support for Android 15.  
>   - Full de/recompilation (including resources) of simple APKs (like Overlays) that do NOT include images is now possible again. Note: This functionality was buggy in builds made for DI v4.8-b2+. Refer to the BUGs section for details.  
>
> - **New `setdefault` dalvik_memory**  
>   - Allows changing the maximum memory value assigned to the DalvikVM heap at runtime.  
>   - Ensures the correct functioning of JARs that require higher memory capacity, a need introduced by Apktool 2.11.0 optimizations with threads. These optimizations improve performance but consume more memory during execution.  
>
> - **Fixes and Improvements:**  
>   - Fixed `setdefault` extraction_speed: Broken in the previous version, potentially causing unexpected errors in `update`, `update_zip`, and `write_raw_image` functions.  
>   - Fixed a small bug in the `string` function (affecting the `remove` flag).  
>   - Ensured escape fixes are applied to the `print` function.  
>   - Optimized `find_apk` function: Now performs filtering more efficiently.  
>
> - **New Features:**  
>   - Added alias `tolog`: Provides a more explicit way to log outputs (equivalent to the `echo2` function).  
>   - Added alias `import`: Provides a more explicit way to import external code (equivalent to the `.` command).  
>   - `dynamic_install_apk` function now supports the `-include-overlays` and `-include-splits` flags. While these may result in unexpected behaviors when used on paths containing apps and overlays (as the app and its overlay would not be distinguished), they can improve performance in controlled environments where certainty about app types exists.  

> ### Z variant
>
> - Same as the standard version.
