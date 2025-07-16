# 🎨 Instant IMG RAW Edit
> This module supports both Magisk, KSU and derivatives.

## 🚨 DISCLAIMER
> By using this module, you acknowledge and agree that you assume full responsibility for any and all risks. The developer is not liable for any damage to your device, data loss, or any other issues that may arise from its use.

## ℹ️ About
- This allows you to extract or modify content from other Firmwares or ROMs **directly from your Android device** in record time, without the need for decompiling or recompiling!
- Direct edition based on a temporary mount of the IMGS

## 🔧 Prerequisites
- Android device (64-bit required for SUPER images and Sparse to RAW conversions).
- Magisk or KSU installed.

## 🛠️ Instructions
1. Create a folder named `raw_img` in your internal storage.
2. Place your IMG files inside the folder.
   ![mylogo](https://raw.githubusercontent.com/BlassGO/LetsGO_request/main/contents/android-projects/launch/devs/Instant_IMG_RAW_Edit/images/path.jpg){style="max-width: 400px;"}
3. Install the ZIP using Magisk or KSU.
4. The installation process will remain active until you press any Volume button (**Do not close the MANAGER!**).
5. Use any root file explorer to navigate to `/mnt/INSTANT_RAW_EDIT` and edit or copy files as needed.
6. Press any Volume button to finalize editing (finish the execution of the module).

## 📝 Supported Images
- **RAW IMGs**
- **Sparse IMGs** (converted to RAW before editing, which may take some time)
- **SUPER IMGs** (Multiple SUPER images can be processed simultaneously)

IMGs with restrictions like EROFS are not supported for editing. However, their contents can still be accessed in Read-Only mode{.remark}

## 📝 Remarks
- This module **does not ensure** the preservation of the original signature of the IMG. If a stock firmware is modified, it may need to be installed with a custom **vbmeta** or something similar.
- I recommend using this primarily for quick reviews of multiple IMGs and content extraction rather than for editing.

## 🗑️ Uninstallation
It is not a real module, after its execution and especially in Managers such as KSU it is possible that it is necessary to remove the module since it is of no use (it is residual garbage).

