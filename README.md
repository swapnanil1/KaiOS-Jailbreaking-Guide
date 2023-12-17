# (Final Year Project) Enable Hotspot App & A KaiOS-Jailbreaking-Guide 
In this project i have successfully build a Simple Hotspot App using JS for KaiOS device that don't support it by default.
Completing this project has helped me gain intimate knowledge about JavaScript, Linux(packagemangement,permissions,configuration) & how KaiOS App packaging.
Writing this Comprehensive guide for jailbreaking KaiOS devices, focusing on Jiophones in India, by offering step-by-step instructions, compatibility details, and safety precautions. 

## Table of Contents

- [Introduction](#introduction)
- [Methods of Jailbreaking](#methods-of-jailbreaking)
- [Compatibility](#compatibility)
- [Installation Steps](#installation-steps)
- [Disclaimer](#disclaimer)

## Introduction

Welcome to the KaiOS Jailbreaking Guide! This guide will walk you through the process of jailbreaking KaiOS devices, with a focus on Jiophones in India. Keep in mind that this process requires technical understanding and carries risks. Proceed cautiously and ensure you have proper backups and recovery options.

## Methods of Jailbreaking

There are two primary methods to jailbreak KaiOS devices:

1. **Using WEB-IDE / ADB Debug (Official Method):** This official method is compatible with Nokia KaiOS phones. It involves utilizing the WEB-IDE or ADB debug mode to gain root access.

2. **Manual Patching with Apps like Omnisd/Wallace Toolbox:** This advanced method involves manually patching the Userdata partition with apps like Omnisd and Wallace Toolbox. This method is tailored for Jiophone users.

## Compatibility

Please note the following compatibility details:

- Any Qualcomm JioPhone's Firmware/Stock ROMs released after mid-2019 cannot be jailbroken. This is due to custom apps being locked behind the Jiostore app. Installing apps like Wallace/Omnisd on newer firmware will prompt a message to update the app from Jiostore.
- If your phones chipset is not Qualcomm then you need to find your own way to dump and flash the stock images from your device other than that the installtion step 2,3 and 4 will be same for all.

- If you're using a JioPhone F220B model, there's one specific firmware version that works with the second jailbreaking method: `LYF_Jio_F220B_003-01-26_110119`.


## Installation Steps

### 0. Downgrade Frimware if needed 

- Use Google to search for your device frimware and flash it required tools.

### 1. Dump Boot, Recovery, and Userdata Images

- Boot into edl mode.
- Use tools like [bkerler/edl](https://github.com/bkerler/edl) to dump `boot.img`, `recovery.img`, and `userdata.img` from your device.
- edl printgpt
- edl r boot /path/to/boot.img --loader=your_loader_here --memory=emmc
- edl r recovery /path/to/recovery.img --loader=your_loader_here --memory=emmc
- edl r userdata /path/to/userdata.img --loader=your_loader_here --memory=emmc
- to flash them back replace the `r` with `w` followed by there location
  
### 2. Modify Boot and Recovery Images

- Modify `boot.img` and `recovery.img` With custom `adbd` file from bananahacker and modifying parameters in the `default.prop` support ADB.
- use abootimg to unpack repack them follow guide on [Bananahackers](https://ivan-hc.github.io/bananahackers/custom-firmware.html).

### 3. Patch Userdata Image

- Mount `userdata.img` using the command `mount -o loop /path/to/userdata.img /mnt/img`.
- Navigate to `/mnt/img/data/local/webapps` and add the [WallaceToolbox](https://gitlab.com/suborg/wallace-toolbox) which needs to be compiled).
- Edit `webapps.json` to include necessary changes.
- Set permissions for WallaceToolbox in `/mnt/img/data/local/permissions.sqlite` using a tool like dbbrowser4sqlite.
- Unmount the image using `umount /mnt/img`.
- flash modified images back.

### 4. Post-Installation Steps

- Boot back into KaiOS you will find the Wallace Toolbox. Open it.
- Enable the developer menu in Wallace Toolbox (Press # in Wallace) and reboot.

- Select "ADB & Devtools" in the developer options of the settings app then open the Wallace app. Press `1` for temporary rooted ADB.

- Connect your phone to your computer and execute the provided ADB commands to block updates and maintain the jailbroken state.

- adb shell into you device
    ~~~adb
    mount -o remount,rw /system
    echo '127.0.0.1 fota.mst.kai.jiophone.net' >> /system/etc/hosts
    echo '127.0.0.1 jioads.akamaized.net' >> /system/etc/hosts
    echo '127.0.0.1 ssp.kaiads.com' >> /system/etc/hosts
    sync
    mount -o remount,ro /system
    exit
    adb reboot
### 5. Installing Simple Hotspot App
- Download the binary from sources [releases](https://github.com/swapnanil1/KaiOS-Jailbreaking-Guide/releases).

- Install via Wallce Toolkit and thats it. You have successfully installed and confiured your device to enable hotspot.

- For creating your own apps refer to [KaiOS/docs]("https://www.kaiostech.com/docs/)

- For installing community made apps refer from sources like [Bananahackers](https://github.com/bananahackers).



## Disclaimer

Please be aware that jailbreaking and using these tools can result in bricking your phone if not done correctly. This guide is meant for educational purposes, and I am not responsible for any damages that may occur to your device. Prior research and understanding are crucial before attempting the jailbreaking process.

**Proceed at your own risk.**

---
Author: [Swapnanil]
Date: [18/12/2023]
