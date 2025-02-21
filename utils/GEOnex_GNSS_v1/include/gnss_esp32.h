#ifndef GNSS_ESP32_H
#define GNSS_ESP32_H

#include <TinyGPSPlus.h>
#include <HardwareSerial.h>

class GPSModule
{
private:
    HardwareSerial gpsSerial;
    TinyGPSPlus gps;

public:
    GPSModule(int rxPin, int txPin, int baudRate);
    void processGPSData();
    bool hasNewLocation();
    double getLatitude();
    double getLongitude();
};

#endif // GNSS_ESP32_H
