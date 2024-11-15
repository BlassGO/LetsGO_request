## Changelog

> ### Standard
>
> - Restructured and optimized the installer launch logic, requiring fewer processes and reducing the time needed to load the general environment.
> - Enhanced architecture detection in the launcher to better align with the device's native environment. The parent executable or a related process can now identify **armeabi-v7** architectures. Although this wasn't previously an issue when running DI on **armeabi-v7**, starting with v5.0+ (multi-architecture editions), it could create a semi-functional environment with limitations (utilities like Apktool would unexpectedly fail). This may have gone unnoticed if you've only used DI on **arm64**.
> - Optimized the logic of functions such as **set_context**, **eval_context**, **get_context**, **eval_perm**, and more.

> ### Z variant
>
> - Same as the standard version but with 7zip (instead of unzip) for extractions.
