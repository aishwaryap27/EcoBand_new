export const summaryStats = {
  totalBlocks: 4,
  totalFloors: 8,
  totalSmartDustbins: 16,
  activeAlerts: 4,
}

export const blocks = [
  {
    name: 'CSE',
    floors: 2,
    dustbins: 4,
    fillPercentage: 74,
    status: 'Warning',
    description: 'High traffic academic wing',
  },
  {
    name: 'Civil',
    floors: 2,
    dustbins: 4,
    fillPercentage: 58,
    status: 'Normal',
    description: 'Balanced usage across labs',
  },
  {
    name: 'Mechanical',
    floors: 2,
    dustbins: 4,
    fillPercentage: 86,
    status: 'Critical',
    description: 'Workshop waste requires priority',
  },
  {
    name: 'Architecture',
    floors: 2,
    dustbins: 4,
    fillPercentage: 42,
    status: 'Normal',
    description: 'Stable and under observation',
  },
]

export const dustbins = [
  {
    id: 'BIN-101',
    location: 'CSE · Floor 1',
    fillLevel: 82,
    weight: '18.4 kg',
    wasteType: 'Mixed Waste',
    battery: '72%',
    gasStatus: 'Stable',
    collectionStatus: 'Pending',
    status: 'Warning',
  },
  {
    id: 'BIN-204',
    location: 'Civil · Floor 2',
    fillLevel: 46,
    weight: '9.6 kg',
    wasteType: 'Paper',
    battery: '91%',
    gasStatus: 'Normal',
    collectionStatus: 'Scheduled',
    status: 'Normal',
  },
  {
    id: 'BIN-307',
    location: 'Mechanical · Floor 1',
    fillLevel: 95,
    weight: '22.1 kg',
    wasteType: 'Metal & Plastic',
    battery: '38%',
    gasStatus: 'Alert',
    collectionStatus: 'Urgent',
    status: 'Critical',
  },
  {
    id: 'BIN-412',
    location: 'Architecture · Floor 2',
    fillLevel: 33,
    weight: '7.2 kg',
    wasteType: 'Organic',
    battery: '84%',
    gasStatus: 'Normal',
    collectionStatus: 'On Track',
    status: 'Normal',
  },
]

export const alerts = [
  {
    title: 'Dustbin full',
    message: 'BIN-307 in Mechanical Block is above 95% capacity.',
    severity: 'Critical',
  },
  {
    title: 'Low battery',
    message: 'BIN-307 reports 38% battery and may need servicing.',
    severity: 'Warning',
  },
  {
    title: 'Gas detected',
    message: 'BIN-101 shows elevated gas levels near the sensor.',
    severity: 'Warning',
  },
  {
    title: 'Collection pending',
    message: 'Two bins in CSE are awaiting the next collection round.',
    severity: 'Normal',
  },
]
