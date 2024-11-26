## Changelog

> ### Standard
>
> - **New print format**: PlainMark is a lightweight markup language based purely on Bash, designed to generate preformatted plain text, ideal for environments such as Recovery / Magisk / KSU.
>   
>   Example usage:
>   ```
>   print "
>     <box>
>        <center>
>            Welcome to PlainMark!
>        </center>
>        <linebox/>
>        <center>
>             By @BlassGO | 2024
>        </center>
>    </box>
>   " 50
>   ```
>   
> - Standardized the use of `zip_list`, `zip_list_file`, `zip_list_dir`. These can now be used to retrieve lists of ZIP file contents in a standardized format, for both the Z variant (7z) and the Standard (unzip).
> 
> - Expanded the use of `zip_list` to multiple native functions. This ensures compatibility with the extraction manager for each variant, allowing functions such as `check_content` to handle very large ZIP files if used in a variant that supports it (Z variant).
> 
> - Optimized the extraction of `extra.zip`. Previously, there was redundancy during the launcher startup and the subsequent extraction of all addons.
> 
> - All contents in `META-INF/addons` will now receive the "setdefault permissions". Previously, this could not be controlled.
> 
> - New `setdefault overwrite_symlinks`. This enables or restricts the replacement of symlinks with `package_extract_dir` and `package_extract_file`. Previously, if any destination file matched an existing symlink, it could cause unexpected results, such as overwriting the source file instead of the symlink, or simply an extraction error. This also includes a detailed log report that was not covered in previous versions.
> 
> - New `setdefault devices_alert`. This allows disabling the abort and alert when a supported device is not detected by "setdefault devices", enabling manual error handling afterward.

> ### Z variant
>
> - Same as the standard version.
