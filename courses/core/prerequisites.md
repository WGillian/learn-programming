# Prerequisites

## Get a unix-based operating system

Either Linux (Ubuntu) or a Mac.

Why? - This is an opinionated choice. Most server side software runs on Linux, the command line is a lot better than Window's command line (IMO).

### Installing Ubuntu inside a VM (Easy).

* [Download Ubuntu (64bit)](https://www.ubuntu.com/download/desktop) (latest LTS version)
* [Download Virtual Box](https://www.virtualbox.org/wiki/Downloads) and install it.
* Setup Ubuntu inside Virtual Box. [Here's a guide if you need it](http://www.psychocats.net/ubuntu/virtualbox)
  - Note: check the box `Download updates whilst installing Ubunutu` on the install wizard.
* Installing guest additions (should make your VM run smoother)
  - Download the Guest Additions by running `sudo apt-get install virtualbox-guest-additions-iso` in terminal.
  - Find the downloaded image in Ubuntu `computer/usr/share/virtualbox/VBoxGuestAddition.iso`, and right click => open with/disk image mounter.
  - Select run and enter your password.
  - Restart when prompted.

### Installing Ubuntu alongside Windows.

You're on your own. Disclaimer - you might break your Windows.

### Mac

Own a Mac.
