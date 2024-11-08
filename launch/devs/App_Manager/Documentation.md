## General use
Extract the user ID and all the information about system and user apps.

1. Download the ``app_manager`` file.
2. This file must be in the Android device storage. If you are on a computer you can send it through ADB, using:
   ```bash
   adb push app_manager /sdcard
   ```
3. Execute using the native ``app_process`` command. ``CLASSPATH`` specifies the path of the executable within the device.
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

   Example:
   ```
   USER:0
   ENABLED:SYSTEM:10027:com.bootleggers.shishufied.clockfont.alienleague:/system/product/overlay/ClockFontAlienLeague/ClockFontAlienLeagueOverlay.apk:Alien League
   ENABLED:SYSTEM:10161:com.android.internal.display.cutout.emulation.noCutout:/system/product/overlay/DisplayCutoutNoCutout/NoCutoutOverlay.apk:Ocultar
   ENABLED:SYSTEM:10224:com.android.theme.font.sanfrancisco:/system/product/overlay/FontSanFranciscoDisplayProSource/FontSanFranciscoDisplayProSourceOverlay.apk:SanFrancisco
   ```

## App icons
Extract all icons from system and user apps.
1. Download the ``app_manager`` file.
2. This file must be in the Android device storage. If you are on a computer you can send it through ADB, using:
   ```bash
   adb push app_manager /sdcard
   ```
3. Execution using the native ``app_process`` command. It is necessary to include the ``-icon`` parameter followed by the destination folder where to extract the icons (this folder will be created automatically).
   ```bash
   adb shell "export CLASSPATH=/sdcard/app_manager; app_process / Main -icon /sdcard/icons"
   ```
4. Impressions change when using icon extraction.
   ```
   icon:<DEST>/<PACKAGE>.png
   ```

   If there are apps that do not provide an icon, the following will be printed. In case there is an error during compression to `PNG`, a printout of the exception produced will also be included.
   ```
   null:<PACKAGE>
   ```

   Example:
   ```
   icon:/sdcard/icons/android.png
   icon:/sdcard/icons/co.aospa.sense.png
   icon:/sdcard/icons/com.android.camera.png
   ```
5. Finally, if you need it you can transfer this folder to your current work path (computer), using:
   ```bash
   adb pull /sdcard/icons
   ```

## REMARKS
By default, icon extraction does not overwrite files, this prevents the extraction of already existing icons in the destination. If you want to ensure that the destination folder is removed first, you must specify the `-rm` parameter.
```bash
adb shell "export CLASSPATH=/sdcard/app_manager; app_process / Main -rm -icon /sdcard/icons"
```



