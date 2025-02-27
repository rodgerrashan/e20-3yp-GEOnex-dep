#include <Arduino.h>
#include "gnss_esp.h"
#include "WiFi.h"
#include "TinyGPSPlus.h"
#include <BasicLinearAlgebra.h>
#include "config.h"
#include "gps_manager.h"

// Create GPS module instance

#define BUFFER_SIZE 50
double lat_buffer[BUFFER_SIZE];
double lon_buffer[BUFFER_SIZE];
double fixedLat, fixedLon;

int i = 0;

double calculateMean(const double arr[], int size)
{
    if (size == 0)
        return 0.0; // Avoid division by zero

    double sum = 0.0;
    for (int i = 0; i < size; i++)
    {
        sum += arr[i];
    }
    return sum / size;
}