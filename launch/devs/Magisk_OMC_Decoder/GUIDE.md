# Installation

> This module supports both Magisk, KSU and derivatives.

## Prerequisites
- Device with Samsung's customization layer (OneUI or older).
- OMC encrypted (``cscfeature.xml``, ``cscfeature_network.xml``, ``customer_carrier_feature.json``)

## Instructions
1. Install the module by Magisk/KSU.
2. Select the preference:

  > **Full OMC decrypt**: Fully decrypt the OMC, including all countries. This will take more time.
  > 
  > **Current country only**: Decrypt only the OMC for the current firmware country, decrypting only the features currently in use by the system. This is a lighter option.

3. Reboot

If your device is Read-Only and you cannot make modifications to the files directly. You can try to make changes to the path that will be printed on the screen at the end of the installation.{.remark}

## REMARK
This module does not make changes directly to the system. Even for current OMCs that are located in ``/optics``, the module will prefer to perform a post-fs-data script to simulate the magic mount, reverting any changes after decryption if the module is uninstalled.

## Uninstallation
On both old and new devices, simply uninstall the module from the Manager app.

If for some reason you need to forcibly uninstall the module from recovery, the method may change slightly depending on the device. You must make sure to delete these paths/files:

* /data/adb/modules/omc-decoder
* /data/adb/post-fs-data.d/omc-decoder.sh