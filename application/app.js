var lock = navigator.mozSettings.createLock();
lock.set({'tethering.wifi.enabled': true});
lock.set({'tethering.wifi.ip': "192.168.1.1"});
lock.set({'tethering.wifi.prefix': "24"});
lock.set({'tethering.wifi.dhcpserver.startip': "192.168.1.10"});
lock.set({'tethering.wifi.dhcpserver.endip': "192.168.1.30"});
lock.set({'tethering.wifi.ssid': "Simple Hotspot"});
lock.set({'tethering.wifi.security.type': "wpa-psk"});
lock.set({'tethering.wifi.security.password': "123454321"});
