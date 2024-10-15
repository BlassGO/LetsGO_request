# Installation

> This module supports both Magisk, KSU and derivatives.

## Prerequisites
- Samsung device with Exynos (Other processors use other unsupported implementations).

## Instructions
### Remove the Booting Warning
1. Install the module by Magisk/KSU.
### Change the Bootlogo
1. Create a folder in the internal storage called ``mylogo``.
3. Inside ``mylogo``, place a JPG image that must be called ``logo.jpg``.
   ![mylogo](https://i.ibb.co/wpg9n1z/image.png){style="max-width: 400px;"}
4. Now, install the module by Magisk/KSU.
5. Reboot and enjoy

By default, it will always try to remove the Booting Warning. In addition, the images will be adjusted to the resolution of the originals of each device. One logo for multiple devices!{.remark}

## SCOPE
There are many more images in ``PARAM`` besides the ``logo.jpg``. This module covers all of them, because its method consists of searching and comparing images by name. In this way, the only condition is to always use the name of the original images, if they do not match on the device they will simply be ignored.

Here are some interesting examples:

| **File Name**            | **Description**                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| **device_lock.jpg**       | Image shown when attempting to relock the bootloader from download mode.        |
| **device_unlock.jpg**     | Image shown when the bootloader is currently locked and user attempts to unlock it in download mode. |
| **download_error.jpg**    | Image shown when there is a firmware update error.                              |
| **lpm.jpg**               | First splash image displayed when connecting the device to a charger while it is powered off. |
| **download.jpg**          | Classic download mode image. When waiting for an Odin installation |
| **letter.jpg**            | Splash screen shown after the boot logo as part of the boot animation on newer devices. |


## ADVANCED
It is possible to configure special options.

**NOTE:** To apply changes, the module must be reinstalled.

1. Inside ``mylogo`` create a file called ``configs.prop`` (make sure its extension is .prop)
   ![myprop](https://i.ibb.co/Dg8Mwr9/image.png){style="max-width: 400px;"}
2. Open the file with a text editor and paste this content:
   ```
   #PARAM configs
   adapt_images_to_natives=true
   remove_booting_warning=true
   ```
3. Edit the properties to your liking, understanding their use:

| **Property**                    | **Description**                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| `adapt_images_to_natives`    | Ensures that images adapt to their original resolution within the device, preserving the resolution of the original images being replaced. Otherwise, ``false`` |
| `remove_booting_warning`     | Remove the booting warning. Otherwise, ``false``                       |
