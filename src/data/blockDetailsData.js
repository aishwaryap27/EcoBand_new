export const blockDetailsData = {
  CSE: {
    name: 'CSE',
    health: 'Good',
    lastUpdated: '10 min ago',
    summary: {
      floors: 2,
      smartDustbins: 2,
      averageFillLevel: '63%',
      pendingCollections: 1,
      activeAlerts: 2,
      averageBatteryHealth: '81%'
    },
    sustainability: {
      totalWaste: '186 kg',
      recyclableWaste: '92 kg',
      organicWaste: '74 kg',
      calorificValue: '16.8 MJ',
      energyRecovery: '78 kWh',
      co2Saved: '110 kg',
      landfillDiversion: '67%'
    },
    floors: [
      {
        title: 'Floor 1',
        bins: [
          {
            id: 'BIN-CSE-101',
            fillLevel: 82,
            weight: 18.4,
            wasteType: 'Mixed Waste',
            calorificValue: '14.8 MJ',
            recyclableWaste: '5.2 kg',
            battery: 72,
            gasStatus: 'Stable',
            collectionStatus: 'Pending',
            lastUpdated: '8 min ago',
            temperature: '31°C',
            humidity: '58%'
          }
        ]
      },
      {
        title: 'Floor 2',
        bins: [
          {
            id: 'BIN-CSE-202',
            fillLevel: 44,
            weight: 9.6,
            wasteType: 'Paper',
            calorificValue: '9.4 MJ',
            recyclableWaste: '7.8 kg',
            battery: 89,
            gasStatus: 'Normal',
            collectionStatus: 'Scheduled',
            lastUpdated: '12 min ago',
            temperature: '29°C',
            humidity: '54%'
          }
        ]
      }
    ]
  },
  Civil: {
    name: 'Civil',
    health: 'Stable',
    lastUpdated: '16 min ago',
    summary: {
      floors: 2,
      smartDustbins: 2,
      averageFillLevel: '54%',
      pendingCollections: 1,
      activeAlerts: 1,
      averageBatteryHealth: '88%'
    },
    sustainability: {
      totalWaste: '152 kg',
      recyclableWaste: '68 kg',
      organicWaste: '58 kg',
      calorificValue: '12.5 MJ',
      energyRecovery: '61 kWh',
      co2Saved: '94 kg',
      landfillDiversion: '72%'
    },
    floors: [
      {
        title: 'Floor 1',
        bins: [
          {
            id: 'BIN-CIV-101',
            fillLevel: 58,
            weight: 12.2,
            wasteType: 'Organic',
            calorificValue: '10.6 MJ',
            recyclableWaste: '3.4 kg',
            battery: 86,
            gasStatus: 'Normal',
            collectionStatus: 'Scheduled',
            lastUpdated: '14 min ago',
            temperature: '30°C',
            humidity: '56%'
          }
        ]
      },
      {
        title: 'Floor 2',
        bins: [
          {
            id: 'BIN-CIV-202',
            fillLevel: 49,
            weight: 10.8,
            wasteType: 'Plastic',
            calorificValue: '11.2 MJ',
            recyclableWaste: '4.8 kg',
            battery: 90,
            gasStatus: 'Stable',
            collectionStatus: 'On Track',
            lastUpdated: '18 min ago',
            temperature: '28°C',
            humidity: '53%'
          }
        ]
      }
    ]
  },
  Mechanical: {
    name: 'Mechanical',
    health: 'Critical',
    lastUpdated: '5 min ago',
    summary: {
      floors: 2,
      smartDustbins: 2,
      averageFillLevel: '91%',
      pendingCollections: 2,
      activeAlerts: 3,
      averageBatteryHealth: '42%'
    },
    sustainability: {
      totalWaste: '224 kg',
      recyclableWaste: '108 kg',
      organicWaste: '46 kg',
      calorificValue: '22.1 MJ',
      energyRecovery: '104 kWh',
      co2Saved: '132 kg',
      landfillDiversion: '61%'
    },
    floors: [
      {
        title: 'Floor 1',
        bins: [
          {
            id: 'BIN-MEC-101',
            fillLevel: 95,
            weight: 22.1,
            wasteType: 'Metal & Plastic',
            calorificValue: '19.8 MJ',
            recyclableWaste: '8.6 kg',
            battery: 38,
            gasStatus: 'Alert',
            collectionStatus: 'Urgent',
            lastUpdated: '5 min ago',
            temperature: '34°C',
            humidity: '61%'
          }
        ]
      },
      {
        title: 'Floor 2',
        bins: [
          {
            id: 'BIN-MEC-202',
            fillLevel: 87,
            weight: 19.4,
            wasteType: 'Mixed Waste',
            calorificValue: '17.2 MJ',
            recyclableWaste: '6.8 kg',
            battery: 46,
            gasStatus: 'Warning',
            collectionStatus: 'Pending',
            lastUpdated: '7 min ago',
            temperature: '32°C',
            humidity: '59%'
          }
        ]
      }
    ]
  },
  Architecture: {
    name: 'Architecture',
    health: 'Good',
    lastUpdated: '20 min ago',
    summary: {
      floors: 2,
      smartDustbins: 2,
      averageFillLevel: '39%',
      pendingCollections: 0,
      activeAlerts: 1,
      averageBatteryHealth: '85%'
    },
    sustainability: {
      totalWaste: '128 kg',
      recyclableWaste: '58 kg',
      organicWaste: '42 kg',
      calorificValue: '10.9 MJ',
      energyRecovery: '53 kWh',
      co2Saved: '81 kg',
      landfillDiversion: '74%'
    },
    floors: [
      {
        title: 'Floor 1',
        bins: [
          {
            id: 'BIN-ARC-101',
            fillLevel: 34,
            weight: 7.2,
            wasteType: 'Organic',
            calorificValue: '8.1 MJ',
            recyclableWaste: '2.6 kg',
            battery: 84,
            gasStatus: 'Normal',
            collectionStatus: 'On Track',
            lastUpdated: '20 min ago',
            temperature: '28°C',
            humidity: '52%'
          }
        ]
      },
      {
        title: 'Floor 2',
        bins: [
          {
            id: 'BIN-ARC-202',
            fillLevel: 44,
            weight: 8.9,
            wasteType: 'Paper',
            calorificValue: '9.8 MJ',
            recyclableWaste: '3.9 kg',
            battery: 86,
            gasStatus: 'Normal',
            collectionStatus: 'Scheduled',
            lastUpdated: '22 min ago',
            temperature: '27°C',
            humidity: '50%'
          }
        ]
      }
    ]
  }
}
