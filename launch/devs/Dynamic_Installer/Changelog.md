## Changelog

## Changelog

> ### Stable
>
> - **New `setdefault` option:**
>   - `framework_res`: Allows defining which `framework-res` files to use with `dynamic_apktool` and `apktool`. Supports multiple frameworks and ensures they are only installed once per session.
>
> - **Improvements to `xml_kit`:**
>   - Fixed bugs when matching closing tags like `</name>` or `name` to avoid false matches with self-closing tags like `<name/>`, and vice versa.
>   - Now supports tags with attributes spread across multiple lines, which were previously undetectable.
>   - Tag searches can now include attribute filtering, either by checking for the existence of attributes or by matching specific values.
>
> - **Improvements to `dynamic_apktool`:**
>   - Enhanced detection of special directories such as `res/` and `assets/`, even when their names are non-standard. This ensures that all relevant content is included in the final APK/JAR, especially useful for Samsung JARs cases.
>   - Removed deprecated flag `-framework` in favor of the new dedicated `setdefault`.
>   - Removed `-command` flag; now, any unrecognized flags are passed directly to Apktool, improving clarity and usability.
>   - Removed `-no-api` flag in favor of native detection in Apktool.
>   - Added new flags `-smali-command` and `-baksmali-command` to allow passing custom arguments to baksmali/smali, only used with `-use-smali` or `-use-baksmali`.


> ### Z variant
>
> - Same as the Standard version.
