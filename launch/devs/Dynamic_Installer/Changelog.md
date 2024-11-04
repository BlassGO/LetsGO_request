## Changelog

> ### Standard
>
> - Reverted to Apktool v2.9.0 as the v2.10.0 implemented in DI v5.2 is currently unstable in certain recompilation cases, such as **services.jar**.
> - Some processes were optimized before the execution of the main script, ensuring faster execution.
> - Optimized the logic of commonly used functions like **ui_print**, **package_extract_dir**, **package_extract_file**, **defined**, **undefined**, **contains**, and more.
> - Improved the logic of less frequently used functions involved in the installation process, such as **getarch**, **getdefault**, and others.
> - The native variable **installzip** is once again read-only to ensure its integrity (it was previously writable as some functions required temporary changes; this practice has been replaced with a local duplication).
> - Removed the unused native variable **max_arch**.

> ### Z variant
>
> - Same as the standard version but with 7zip (instead of unzip) for extractions.
