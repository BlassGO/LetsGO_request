## Advantages

- **Direct DalvikVM Execution**: Executes directly on the DalvikVM (Android), avoiding the overhead of launching a full app.
- **Comprehensive App Information**: Provides detailed information on system and user apps, including:
   ```Status (ENABLED/DISABLED/UNINSTALLED).
   > Membership (SYSTEM/USER).

   > App ID.

   > Package name.

   > App path.

   > Common name (Label).
   ```

- **User ID Retrieval**: Quickly fetches the current user ID, useful for identifying the active user.
- **App Icon Extraction**: Allows the extraction of app icons as PNG files to an external path, enabling easy visual identification of apps.


## Usage
   For individual execution (outside of an app) the use of `app_process` is recommended. You can define the executable in the global shell variable `CLASSPATH`. Then call app_process to start the execution of the `Main` class.
   ```bash
   adb shell "export CLASSPATH=/sdcard/app_manager; app_process / Main"
   ```
    
   The first line that is printed by default is the user. In case of error the ID will be `null`.
   ```
   USER:<ID>
   ```
   
   Then, all the available apps are printed, following this format:
   ```
   <ENABLED/DISABLED/UNINSTALLED>:<SYSTEM/USER>:<ID>:<PACKAGE>:<PATH>:<LABEL>
   ```
   
   If you want to extract app icons, you must use the `-icon` parameter followed by the destination path.
   ```bash
   adb shell "export CLASSPATH=/sdcard/app_manager; app_process / Main -icon /sdcard/icons"
   ```

   By default, icon extraction does not overwrite files, this prevents the extraction of already existing icons in the destination. If you want to ensure that the destination folder is removed first, you must specify the `-rm` parameter.
   ```bash
   adb shell "export CLASSPATH=/sdcard/app_manager; app_process / Main -rm -icon /sdcard/icons"
   ```
   
   Impressions change when using icon extraction.
   ```
   icon:<DEST>/<PACKAGE>.png
   ```
   
   If there are apps that do not provide an icon, the following will be printed. In case there is an error during compression to `PNG`, a printout of the exception produced will also be included.
   ```
   null:<PACKAGE>
   ```

## REMARKS   
   > Individual execution is intended for `adb shell` where you have certain configurations and special permissions. If you want to run in a low-privileged shell, you probably won't be able to get information like the current user ID. Also, it is necessary to ensure a suitable environment, it is not recommended to call `/system/bin/app_process` directly if not available by default, it is better to define the path `/system/bin` inside the `PATH` variable.



