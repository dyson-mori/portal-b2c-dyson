export interface StripeProductProps {
  id: string; // 'prod_Qyru4wkBAy0Kce',
  object: string; // 'product',
  active: string; // true,
  attributes: [],
  created: number; // 1728220027,
  default_price: string; // 'price_1Q6uAyFQmzXupGEAfujAsoYA',
  description: string; // 'Um V-Twin refrigerado a líquido calibrado para produzir um tremendo torque em baixas rotações, com uma curva de torque que se mantém plana durante toda a curva de potência. ',
  images: string[],
  livemode: boolean; // false,
  marketing_features: [],
  metadata: {},
  name: string; // 'Harley Davidson Nightster Special',
  package_dimensions: null,
  shippable: null,
  statement_descriptor: null,
  tax_code: null,
  type: string; // 'service',
  unit_label: null,
  updated: number; // 1728220028,
  url: null
};

export interface ProductProps {
  id: string; // 'prod_Qyru4wkBAy0Kce',
  name: string; // 'Harley Davidson Nightster Special',
  image: string,
  price: string;
  price_code: {
    id: string;
  };
  description: string;
  unit_amount: number;
  quantity: number;
};

export interface DataProductsProps {
  products: ProductProps[];
};

export interface SuccessProps {
  id: string; // "cs_test_a1MRbDNgcburAZI5DXQDnx2YubTqFGVl46Tygt6Yt5zdZuxa1zFe4Ql4Zw",
  object: string; // "checkout.session",
  after_expiration: string | null; // null,
  allow_promotion_codes: string | null; // null,
  amount_subtotal: number; // 4500000,
  amount_total: number; // 4500000,
  automatic_tax: {
    enabled: boolean; // false,
    liability: string | null; // null,
    status: string | null; // null
  };
  billing_address_collection: string | null; // null,
  cancel_url: string; // "http://localhost:3000/",
  client_reference_id: string | null; // null,
  client_secret: string | null; // null,
  consent: string | null; // null,
  consent_collection: string | null; // null,
  created: number; // 1728347619,
  currency: string; // "brl",
  currency_conversion: string | null; // null,
  custom_fields: [],
  custom_text: {
    after_submit: string | null; // null,
    shipping_address: string | null; // null,
    submit: string | null; // null,
    terms_of_service_acceptance: string | null; // null
  },
  customer: string | null; // null,
  customer_creation: string; // "if_required",
  customer_details: {
    address: {
      city: string | null; // null,
      country: string; // "BR",
      line1: string | null; // null,
      line2: string | null; // null,
      postal_code: string | null; // null,
      state: string | null; // null
    },
    email: string; // "supp.programming@gmail.com",
    name: string; // "sergio leal",
    phone: string | null; // null,
    tax_exempt: string; // "none",
    tax_ids: []
  },
  customer_email: string | null; // null,
  expires_at: number; // 1728434018,
  invoice: string | null; // null,
  invoice_creation: {
    enabled: boolean; // false,
    invoice_data: {
      account_tax_ids: string | null; // null,
      custom_fields: string | null; // null,
      description: string | null; // null,
      footer: string | null; // null,
      issuer: string | null; // null,
      metadata: {},
      rendering_options: string | null; // null
    }
  },
  line_items: {
    object: string; // "list",
    data: [
      {
        id: string; // "li_1Q7RMsFQmzXupGEAN28GD2yO",
        object: string; // "item",
        amount_discount: string; // 0,
        amount_subtotal: string; // 4500000,
        amount_tax: string; // 0,
        amount_total: string; // 4500000,
        currency: string; // "brl",
        description: string; // "Harley Davidson forty eight",
        price: {
          id: string; // "price_1Q7FD3FQmzXupGEALeqaPyHo",
          object: string; // "price",
          active: boolean; // true,
          billing_scheme: string; // "per_unit",
          created: number; // 1728300881,
          currency: string; // "brl",
          custom_unit_amount: string | null; // null,
          livemode: boolean; // false,
          lookup_key: string | null; // null,
          metadata: {},
          nickname: string | null; // null,
          product: {
            id: string; // "prod_QzDe8CpAe2nOHG",
            object: string; // "product",
            active: boolean; // true,
            attributes: [],
            created: number; // 1728300880,
            default_price: string; // "price_1Q7FD3FQmzXupGEALeqaPyHo",
            description: string; // "The basis for this project was an early Harley Davidson Sportster Forty Eight that came with spoked rims and to which we have fitted the latest generation of XL 1200 Forty Eight models with the most up to date aluminium rims.",
            images: string[],
            livemode: boolean; // false,
            marketing_features: [],
            metadata: {},
            name: string; // "Harley Davidson forty eight",
            package_dimensions: string | null; // null,
            shippable: string | null; // null,
            statement_descriptor: string | null; // null,
            tax_code: string | null; // null,
            type: string; // "service",
            unit_label: string | null; // null,
            updated: number; // 1728322855,
            url: string | null; // null
          },
          recurring: string | null; // null,
          tax_behavior: string; // "unspecified",
          tiers_mode: string | null; // null,
          transform_quantity: string | null; // null,
          type: string; // "one_time",
          unit_amount: string; // 4500000,
          unit_amount_decimal: string; // "4500000"
        },
        quantity: number; // 1
      }
    ],
    has_more: boolean; // false,
    url: string; // "/v1/checkout/sessions/cs_test_a1MRbDNgcburAZI5DXQDnx2YubTqFGVl46Tygt6Yt5zdZuxa1zFe4Ql4Zw/line_items"
  },
  livemode: boolean; // false,
  locale: string | null; // null,
  metadata: {},
  mode: string; // "payment",
  payment_intent: string; // "pi_3Q7RNHFQmzXupGEA0qPofBvm",
  payment_link: string | null; // null,
  payment_method_collection: string; // "if_required",
  payment_method_configuration_details: string | null; // null,
  payment_method_options: {
    card: {
      request_three_d_secure: string; // "automatic"
    }
  },
  payment_method_types: [];
  payment_status: string; // "paid",
  phone_number_collection: {
    enabled: boolean; // false
  },
  recovered_from: string | null; // null,
  saved_payment_method_options: string | null; // null,
  setup_intent: string | null; // null,
  shipping_address_collection: string | null; // null,
  shipping_cost: string | null; // null,
  shipping_details: string | null; // null,
  shipping_options: [],
  status: string; // "complete",
  submit_type: string | null; // null,
  subscription: string | null; // null,
  success_url: string; // "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
  total_details: {
    amount_discount: string; // 0,
    amount_shipping: string; // 0,
    amount_tax: string; // 0
  },
  ui_mode: string; // "hosted",
  url: string | null;
}
