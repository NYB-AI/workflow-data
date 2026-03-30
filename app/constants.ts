export const CLIENTS = [
  {
    name: "GTC",
    value: "gtc",
  },
  {
    name: "DSM-F",
    value: "dsm-f",
  },
  {
    name: "Ferrero",
    value: "ferrero",
  },
  {
    name: "Ferrero Chocolate",
    value: "ferrero-chocolate",
  },
  {
    name: "Ferrero New",
    value: "ferrero-new",
  },
  {
    name: "Kerry",
    value: "kerry",
  },
  {
    name: "Kerry Requirements",
    value: "kerry-requirements",
  },
  {
    name: "Croda",
    value: "croda",
  },
  {
    name: "Kalbe",
    value: "kalbe",
  },
  {
    name: "Green Pharma",
    value: "green-pharma",
  },
  {
    name: "China Demo",
    value: "china-demo",
  },
  {
    name: "GSK",
    value: "gsk",
  }
] as const;

export const VALID_CLIENTS = CLIENTS.map((c) => c.value) as string[]

export type ClientId = (typeof CLIENTS)[number]["value"]

