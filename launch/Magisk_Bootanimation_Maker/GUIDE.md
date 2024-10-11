# Installation

> This module supports both Magisk, KSU and derivatives.

## Prerequisites
- Have an Android device that supports bootanimation.zip (All AOSP Roms)

**Samsung devices:** OneUI uses another format (.QMG). It will be detected automatically and will ask if you want to change it to the supported one (.ZIP), although this does not always work.{.remark}


## Instructions
1. Create a folder in the internal storage called ``myanim``.
2. Inside ``myanim``, place a short video (.MP4) or GIF (the file name is not important) that will be converted into a Bootanimation.
3. Now, install the module by Magisk/KSU.
4. Reboot and enjoy


## ADVANCED
It is possible to configure special options for the generation of the bootanimation. To do this, follow these steps:

1. Inside ``myanim`` create a file called ``configs.prop`` (make sure its extension is .prop)
2. Open the file with a text editor and paste this content:
   ```
   #Bootanimation configs
   frames=30
   sound=false
   adapt_video_to_screen=true
   infinite_loop=false
   ```
3. Edit the properties to your liking, understanding their use:

| **Property**              | **Description**                                                                                             |
|---------------------------|-------------------------------------------------------------------------------------------------------------|
| `frames`                  | The number of frames per second for the animation. Controls the speed of the bootanimation.                |
| `sound`                   | Determines whether to try including the video sound as part of the bootanimation. Set to `true` to include, `false` to exclude. |
| `adapt_video_to_screen`    | Ensures the generated bootanimation adapts to the device screen size. Set to `true` for adaptation, `false` otherwise.               |
| `infinite_loop`            | Ensures the animation loops infinitely. When set to `true`, the animation repeats until the boot process is finished. |
