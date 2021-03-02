let platforms = [
  {
    id: '16ce0d1f-e2b3-4a09-8994-2ef1a5c6933b',
    name: 'Lonny',
    platformManager: 'Marcelino Eichmann',
    representative: 'Doris Windler',
  },
  {
    id: '982b2c6c-5eed-4439-8f19-483bd2269613',
    name: 'Savanah',
    platformManager: 'Cortney Shields',
    representative: 'Tommie Blanda MD',
  },
  {
    id: '2cc284c5-5624-4cf7-89a1-6ca070c32e26',
    name: 'Frankie',
    platformManager: 'Miss Eldred Nienow',
    representative: 'Miss Amelie Connelly',
  },
  {
    id: '0cb1bb57-71fd-4c75-aa50-11b4d9cae11c',
    name: 'Okey',
    platformManager: 'Macie Powlowski',
    representative: 'Wava Kreiger',
  },
  {
    id: 'f959b2aa-787d-4e83-90dd-166b689ab305',
    name: 'Blaise',
    platformManager: 'Ashlynn Rolfson',
    representative: 'Barton Grant',
  },
  {
    id: 'e7f1edd7-daac-4999-bb7f-3a980bdbd4c6',
    name: 'Alex',
    platformManager: 'Alisa Reichert',
    representative: 'Dashawn Will',
  },
  {
    id: '8296b497-1bca-4358-af74-2ce9a417a641',
    name: 'Adam',
    platformManager: 'Tia Watsica',
    representative: 'Erling Koelpin',
  },
  {
    id: 'ed32eb28-8d14-4e58-be82-15d10e6cc942',
    name: 'Sidney',
    platformManager: 'Daniella Little',
    representative: 'Zoey Moore',
  },
  {
    id: 'cd591698-3590-475f-92de-26b4c4a5d239',
    name: 'Verona',
    platformManager: 'Hanna Block',
    representative: 'Ole Fisher',
  },
  {
    id: '968e6617-e1d8-4f2f-86f1-c967a013a930',
    name: 'Jess',
    platformManager: 'Marta Monahan',
    representative: 'Wilburn Rowe',
  },
]

function getPlatforms() {
  return platforms
}

function getPlatform(id) {
  return platforms.find((platform) => platform.id === id)
}

function deletePlatform(id) {
  platforms = platforms.filter((platform) => platform.id !== id)
}

function addUpdatePlatform(platform) {
  deletePlatform(platform.id)
  platforms.push(platform)
}

module.exports = {
  getPlatforms,
  getPlatform,
  addUpdatePlatform,
  deletePlatform,
}
