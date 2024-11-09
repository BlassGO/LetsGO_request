# Installation
> This ZIP supports Recovery, Magisk, KSU and derivatives.

## How It Works
On each reboot, after the Bootanimation appears, you have **7 seconds** to press the **volume-up button** to trigger the action (default: go to Recovery). If the button is not pressed, the boot process will simply continue as usual.

* Useful if you anticipate a potential bootloop and your device requires a USB cable to access Recovery (current Samsung devices).

## Installation

1. Install the ZIP using **Recovery**, **Magisk**, or **KSU**.

## Uninstall
1. If it was installed by Magisk/KSU, simply uninstall the module
2. If it was installed by Recovery, flash this uninstaller:
  **Download**{data-download-url="aHR0cHM6Ly93d3cubWVkaWFmaXJlLmNvbS9maWxlL3Z3NWdoaGRuajVzaTlvYS9Wb2x1bWVVUF9CbGFzc0dPJTI1NUJVbmluc3RhbGwlMjU1RC56aXAvZmlsZQ=="}

## ADVANCED

You can customize both the action and the wait time limit.

### Recovery Installations Only
1. Rename the ZIP to change the wait time. For example:
  **Original**
   ```
   VolumeUP_BlassGO[ wait=7 ].zip
   ```
   **Updated (10 seconds)**

   ```
    VolumeUP_BlassGO[ wait=10 ].zip
   ```
1. Install the modified ZIP through Recovery.

This method only applies to Recovery installations, as Magisk/KSU installations typically do not retain the original ZIP name.{.remark}

### Editing the ZIP
To change the configs for all installation methods (including Magisk/KSU):

1. Unzip the ZIP file.
2. Open the `configs.prop` file with a text editor and adjust the properties:
   ```
   # Specify the action
   action=reboot recovery
   
   # Set the wait time in seconds
   timeout=7
   ```

The action must be compatible with the Shell Script environment provided by Magisk/KSU (Busybox){.remark}
