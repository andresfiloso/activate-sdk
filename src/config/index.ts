export default {
  BUY: {
    STATES: {
      PENDING: 'A APROBAR',
      APPROVED: 'APROBADA',
      CANCELLED: 'CANCELADA',
    },
  },
  ORDER: {
    PAYMENT_METHODS: ['EFECTIVO', 'BANCO'],
    STATES: {
      PENDING: 'PENDIENTE',
      CONFIRMED: 'CONFIRMADO',
      PREPARED: 'PREPARADO',
      CANCELLED: 'CANCELADO',
    },
  },
  DRAFT: {
    STATES: {
      OPEN: 'OPEN',
      CONFIRMED: 'CONFIRMED',
      CLOSED: 'CLOSED',
    },
  },
  CASHFLOW: {
    INGRESS: 'INGRESS',
    EGRESS: 'EGRESS',
  },
  CASHFLOW_TYPES: [
    'commercial.partner',
    'commercial.provider',
    'external',
    'internal',
    'internal.adjust',
  ],
  INVENTORY: {
    THEORETICAL: 'THEORETICAL',
    REAL: 'REAL',
  },
  PAYMENT: {
    METHODS: {
      DEFAULT: 'DEFAULT',
      CASH: 'CASH',
      BANK: 'BANK',
    },
  },
  DEFAULT: {
    BUY: {
      STATE: 'PENDING',
    },
    ORDER: {
      STATE: 'PENDIENTE',
      PAYMENT_METHOD: 'Efectivo',
    },
    DRAFT: {
      STATE: 'OPEN',
    },
    DELIVERY: {
      METHOD: 'ACTIVATE',
    },
    GARAGE: 'Temperley',
    PARTNER: 'activate',
  },
  PRODUCT: {
    UNITS: {
      WEIGHT: 'WEIGHT',
      UNITY: 'UNITY',
    },
  },
  ROLES: {
    ADMIN: 'ADMIN',
    AV: 'AV',
    CUSTOMER: 'CUSTOMER',
  },
  USER: {
    ROLES: ['ADMIN', 'AV', 'OPERACION', 'COMPRAS', 'PROVEEDOR'],
  },
};
