## Changelog

> ### Standard
>
> - **Bug Fixes:**  
>   - Fixed the issue when using `package_extract_dir` with a ZIP internal path ending in `/`. This caused unexpected behavior and was present in all previous versions.  
>   - Fixed the use of optional variables `convert_from` and `convert_to` in the `convert` function.  
>
> - **Optimizations:**  
>   - Slightly optimized the `find_block` function.  
>   - Improved performance of special loops: `loop`, `loop_file`, `loop_string`, and `loop_array`.  
>   - The `getbins` function now supports external paths.  
>
> - **New Features:**  
>   - **`import_module` function:**  
>     - Allows importing modules specifically designed for the DI.  
>     - Modules are simple ZIP files that can contain their own resources, managed individually via their own `module.sh` script.  
>     - The module’s code is imported into the runtime environment, enabling it to define variables or functions for the main script.  
>
>   - **`switch` function:**  
>     - Facilitates access to structured packages, introducing a new approach for handling plugins within the DI.  
>     - Allows easy switching between different versions of the same defined package.  
>     - Supports structured extractions within ZIPs using short keys, eliminating the need to repeatedly specify source and destination paths.  
>     - Enables script execution within the environment, providing concise modularization and code management in separate files, as well as quick access and execution.  
>
>   - **`add_switch` function:**  
>     - Introduces a flexible standard format for defining new packages for the `switch` function.  

> ### Z variant
>
> - Same as the standard version.
