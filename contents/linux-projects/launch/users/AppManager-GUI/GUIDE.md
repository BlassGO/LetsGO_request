# 📱 Android App Manager GUI
> A cross-platform tool for managing Android applications from your desktop using ADB. Allows uninstalling OEM apps without root access

## 🛠️ Prerequisites
- [**ADB**](https://developer.android.com/tools/releases/platform-tools) (Android Debug Bridge)
- **Windows 10+** or **Linux**
- Android device with USB debugging enabled

## 🚀 Linux
1. **Download**:
   Get `app_manager.tar.gz` from [GitHub Releases](https://github.com/BlassGO/AppManager-GUI/releases){target="_blank"}.
2. **Extract**:
   ```bash
   tar -xzf app_manager_linux_x64.tar.gz -C ~/AppManager
   ```
3. **Connect Device**:
   - Enable USB debugging on your Android device.
   - Connect via USB or pair wirelessly (Settings > TCP/IP).
4. **Run**:
   ```bash
   cd ~/AppManager
   ./app_manager
   ```
   - If ADB isn't detected in your system's PATH, select it using the file explorer.
   - Follow the Setup Wizard to configure language and explore the program.
